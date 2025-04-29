// veterinario-tratamientos.component.ts

import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { DrogaService }       from 'src/app/services/droga.service';
import { MascotaService }     from 'src/app/services/mascota.service';
import { Tratamiento }        from 'src/app/models/tratamiento.model';
import { Droga }              from 'src/app/models/droga.model';
import { Mascota }            from 'src/app/models/mascota.model';

@Component({
  selector: 'app-veterinario-tratamientos',
  templateUrl: './veterinario-tratamientos.component.html',
  styleUrls: ['./veterinario-tratamientos.component.css']
})
export class VeterinarioTratamientosComponent implements OnInit {
  // Panel de veterinario
  nombreVeterinario: string = 'Dr. Pérez';    // o carga desde tu servicio de auth
  cantidadPacientes: number = 0;              // implementa fetch si tienes endpoint
  cantidadCitas: number = 0;                  // implementa fetch si tienes endpoint

  // Datos de tratamientos
  tratamientos: Tratamiento[] = [];
  drogas: Droga[] = [];
  mascotas: Mascota[] = [];
  cantidadTratamientos: number = 0;

  // Modelo de formulario:
  nuevoFecha    = new Date().toISOString().substring(0, 10);
  nuevaDroga?   : Droga;
  nuevaMascota? : Mascota;

  constructor(
    private svcTrat: TratamientoService,
    private svcDr:   DrogaService,
    private svcMs:   MascotaService
  ) {}

  ngOnInit(): void {
    this.cargarTodo();
  }

  /** Carga simultánea de datos */
  private cargarTodo(): void {
    forkJoin({
      tratamientos: this.svcTrat.obtenerTratamientos(),
      drogas:       this.svcDr.getAllDrogas(),
      mascotas:     this.svcMs.getAllMascotas()
    }).subscribe({
      next: ({ tratamientos, drogas, mascotas }) => {
        this.tratamientos = tratamientos;
        this.drogas        = drogas;
        this.mascotas      = mascotas;

        // Actualiza los contadores
        this.cantidadTratamientos = tratamientos.length;
        this.cantidadPacientes    = mascotas.length;      // o petición real
        // this.cantidadCitas = ... carga tus citas
      },
      error: err => {
        console.error('Error al cargar datos', err);
        alert('No se pudo cargar información.');
      }
    });
  }

  crearTratamiento(): void {
    if (!this.nuevaDroga || !this.nuevaMascota) {
      return alert('❌ Selecciona droga y mascota');
    }
    const payload = {
      fecha:       this.nuevoFecha,
      droga:       this.nuevaDroga!.id,
      mascota:     { id: this.nuevaMascota!.id },
      veterinario: { id: 1 }
    };
    this.svcTrat.crearTratamiento(payload).subscribe({
      next: () => {
        this.cargarTodo();
        this.resetForm();
      },
      error: () => alert('Error creando tratamiento')
    });
  }

  resetForm(): void {
    this.nuevoFecha    = new Date().toISOString().substring(0, 10);
    this.nuevaDroga    = undefined;
    this.nuevaMascota  = undefined;
  }

  trackByTratId(index: number, item: Tratamiento): number {
    return item.id!;
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
