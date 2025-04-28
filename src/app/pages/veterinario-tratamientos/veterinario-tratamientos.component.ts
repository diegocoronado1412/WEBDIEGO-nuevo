import { Component, OnInit } from '@angular/core';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { DrogaService } from 'src/app/services/droga.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Droga } from 'src/app/models/droga.model';
import { Mascota } from 'src/app/models/mascota.model';
import { Veterinario } from 'src/app/models/veterinario.model';

@Component({
  selector: 'app-veterinario-tratamientos',
  templateUrl: './veterinario-tratamientos.component.html',
  styleUrls: ['./veterinario-tratamientos.component.css']
})
export class VeterinarioTratamientosComponent implements OnInit {

  tratamientos: Tratamiento[] = [];
  drogas: Droga[] = [];
  mascotas: Mascota[] = [];

  nuevoTratamiento: Partial<Tratamiento> = {
    fecha: '',
    droga: undefined,
    mascota: undefined,
    veterinario: { 
      id: 0, nombre: '', cedula: '', correo: '', celular: '', contrasena: '',
      fotoUrl: '', especialidad: '', numeroAtenciones: 0, rol: ''
    }
  };

  constructor(
    private tratamientoService: TratamientoService,
    private drogaService: DrogaService,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.obtenerTratamientos();
    this.obtenerDrogas();
    this.obtenerMascotas();
  }

  obtenerTratamientos(): void {
    this.tratamientoService.obtenerTratamientos().subscribe((data: Tratamiento[]) => {
      this.tratamientos = data;
    });
  }

  obtenerDrogas(): void {
    this.drogaService.getAllDrogas().subscribe((data: Droga[]) => {
      this.drogas = data;
    });
  }

  obtenerMascotas(): void {
    this.mascotaService.getAllMascotas().subscribe((data: Mascota[]) => {
      this.mascotas = data;
    });
  }

  crearTratamiento(): void {
    if (!this.nuevoTratamiento.droga || !this.nuevoTratamiento.mascota) {
      alert('❌ Debes seleccionar una droga y una mascota.');
      return;
    }

    const tratamientoEnviar: Tratamiento = {
      id: 0,
      fecha: this.nuevoTratamiento.fecha || '',
      droga: { id: (this.nuevoTratamiento.droga as Droga).id } as Droga,
      mascota: { id: (this.nuevoTratamiento.mascota as Mascota).id } as Mascota,
      veterinario: { id: 1 } as Veterinario // O el veterinario logueado si manejas login
    };

    this.tratamientoService.crearTratamiento(tratamientoEnviar).subscribe({
      next: () => {
        alert('✅ Tratamiento creado correctamente');
        this.obtenerTratamientos();
        this.resetearFormulario();
      },
      error: () => {
        alert('❌ Error al crear tratamiento');
      }
    });
  }

  resetearFormulario(): void {
    this.nuevoTratamiento = {
      fecha: '',
      droga: undefined,
      mascota: undefined,
      veterinario: { 
        id: 0, nombre: '', cedula: '', correo: '', celular: '', contrasena: '',
        fotoUrl: '', especialidad: '', numeroAtenciones: 0, rol: ''
      }
    };
  }

  obtenerNombreDroga(droga: Droga | number): string {
    if (typeof droga === 'number') {
      const encontrada = this.drogas.find(d => d.id === droga);
      return encontrada ? encontrada.nombre : 'Desconocido';
    }
    return droga.nombre;
  }

  obtenerNombreMascota(mascota: Mascota | number): string {
    if (typeof mascota === 'number') {
      const encontrada = this.mascotas.find(m => m.id === mascota);
      return encontrada ? encontrada.nombre : 'Desconocido';
    }
    return mascota.nombre;
  }
}
