import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { DrogaService } from 'src/app/services/droga.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Droga } from 'src/app/models/droga.model';
import { Mascota } from 'src/app/models/mascota.model';

@Component({
  selector: 'app-veterinario-tratamientos',
  templateUrl: './veterinario-tratamientos.component.html',
  styleUrls: ['./veterinario-tratamientos.component.css']
})
export class VeterinarioTratamientosComponent implements OnInit {
  nombreVeterinario: string = 'Dr. Pérez';
  cantidadPacientes: number = 0;
  cantidadCitas: number = 0;

  tratamientos: Tratamiento[] = [];
  drogas: Droga[] = [];
  mascotas: Mascota[] = [];
  cantidadTratamientos: number = 0;

  nuevoFecha = new Date().toISOString().substring(0, 10);
  nuevaDroga?: Droga;
  nuevaMascota?: Mascota;

  tratamientoEditando?: Tratamiento;

  constructor(
    private svcTrat: TratamientoService,
    private svcDr: DrogaService,
    private svcMs: MascotaService
  ) {}

  ngOnInit(): void {
    this.cargarTodo();
  }

  private cargarTodo(): void {
    forkJoin({
      tratamientos: this.svcTrat.obtenerTratamientos(),
      drogas: this.svcDr.getAllDrogas(),
      mascotas: this.svcMs.getAllMascotas()
    }).subscribe({
      next: ({ tratamientos, drogas, mascotas }) => {
        this.tratamientos = [...tratamientos];
        this.drogas = drogas;
        this.mascotas = mascotas;

        this.cantidadTratamientos = tratamientos.length;
        this.cantidadPacientes = mascotas.length;
      },
      error: err => {
        console.error('❌ Error al cargar datos', err);
        alert('No se pudo cargar información.');
      }
    });
  }

  crearTratamiento(): void {
    if (!this.nuevaDroga || !this.nuevaMascota) {
      return alert('❌ Selecciona droga y mascota');
    }

    const payload = {
      fecha: this.nuevoFecha,
      droga: this.nuevaDroga.id,
      mascota: { id: this.nuevaMascota.id },
      veterinario: { id: 1 }
    };

    this.svcTrat.crearTratamiento(payload).subscribe({
      next: () => {
        this.cargarTodo();
        this.resetForm();
      },
      error: (e) => {
        console.error('❌ Error creando tratamiento:', e);
        alert('Error creando tratamiento');
      }
    });
  }

  editarTratamiento(trat: Tratamiento): void {
    this.tratamientoEditando = { ...trat };
  }

  guardarCambios(): void {
    if (!this.tratamientoEditando) return;

    const { id, nombre, descripcion, droga, mascota, veterinario } = this.tratamientoEditando;

    if (!id || !nombre || !descripcion || !droga || !mascota || !veterinario) {
      return alert('❌ Campos incompletos al guardar');
    }

    const payload = {
      nombre,
      descripcion,
      droga: {
        id: typeof droga === 'number' ? droga : (droga.id ?? 0)
      },
      mascota: {
        id: typeof mascota === 'number' ? mascota : (mascota.id ?? 0)
      },
      veterinario: {
        id: typeof veterinario === 'number' ? veterinario : (veterinario.id ?? 0)
      }
    };

    if (payload.droga.id === 0 || payload.mascota.id === 0 || payload.veterinario.id === 0) {
      return alert('❌ ID inválido al guardar tratamiento');
    }

    this.svcTrat.actualizarTratamiento(id, payload).subscribe({
      next: () => {
        this.tratamientoEditando = undefined;
        this.cargarTodo();
      },
      error: () => alert('Error actualizando tratamiento')
    });
  }

  eliminarTratamiento(id?: number): void {
    if (!id) {
      alert('ID inválido para eliminar');
      return;
    }

    if (!confirm('¿Eliminar este tratamiento?')) return;

    this.svcTrat.eliminarTratamiento(id).subscribe({
      next: () => this.cargarTodo(),
      error: () => alert('No se pudo eliminar')
    });
  }

  resetForm(): void {
    this.nuevoFecha = new Date().toISOString().substring(0, 10);
    this.nuevaDroga = undefined;
    this.nuevaMascota = undefined;
  }

  trackByTratId(index: number, item: Tratamiento): number {
    return item.id ?? index;
  }

  obtenerNombreDroga(d: Droga | number): string {
    const id = typeof d === 'number' ? d : d.id;
    return this.drogas.find(x => x.id === id)?.nombre || 'Desconocido';
  }

  obtenerNombreMascota(m: Mascota | number): string {
    const id = typeof m === 'number' ? m : m.id;
    return this.mascotas.find(x => x.id === id)?.nombre || 'Desconocido';
  }
}
