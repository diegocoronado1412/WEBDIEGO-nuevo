import { Component, OnInit } from '@angular/core';
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
  tratamientos: Tratamiento[] = [];
  drogas: Droga[] = [];
  mascotas: Mascota[] = [];

  // Modelo de formulario:
  nuevoFecha   = new Date().toISOString().substring(0, 10);
  nuevaDroga?  : Droga;
  nuevaMascota?: Mascota;

  constructor(
    private svcTrat: TratamientoService,
    private svcDr: DrogaService,
    private svcMs: MascotaService
  ) {}

  ngOnInit(): void {
    this.cargarTodo();
  }

  /** Carga tratamientos, drogas y mascotas */
  private cargarTodo(): void {
    this.svcTrat.obtenerTratamientos()
      .subscribe(x => this.tratamientos = x);
    this.svcDr.getAllDrogas()
      .subscribe(x => this.drogas = x);
    this.svcMs.getAllMascotas()
      .subscribe(x => this.mascotas = x);
  }

  /** Crea un tratamiento y recarga la lista completa */
  crearTratamiento(): void {
    if (!this.nuevaDroga || !this.nuevaMascota) {
      return alert('❌ Selecciona droga y mascota');
    }

    const payload = {
      fecha:       this.nuevoFecha,
      droga:       this.nuevaDroga.id,
      mascota:     { id: this.nuevaMascota.id },
      veterinario: { id: 1 }
    };

    console.log('📤 Payload:', payload);
    this.svcTrat.crearTratamiento(payload)
      .subscribe({
        next: () => {
          alert('✅ Tratamiento creado');
          this.cargarTodo();       // recarga toda la lista
          this.resetForm();
        },
        error: err => {
          console.error('Error al crear tratamiento', err);
          alert('❌ Error al crear tratamiento');
        }
      });
  }

  /** Reinicia el formulario */
  resetForm(): void {
    this.nuevoFecha    = new Date().toISOString().substring(0, 10);
    this.nuevaDroga   = undefined;
    this.nuevaMascota = undefined;
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
