// src/app/mascota-detail/mascota-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';     // ← Importa Location
import { MascotaService } from 'src/app/services/mascota.service';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { Mascota } from 'src/app/models/mascota.model';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Droga } from 'src/app/models/droga.model';

@Component({
  selector: 'app-mascota-detail',
  templateUrl: './mascota-detail.component.html',
  styleUrls: ['./mascota-detail.component.css']
})
export class MascotaDetailComponent implements OnInit {
  mascota: Mascota | null = null;
  tratamientos: Tratamiento[] = [];

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private tratamientoService: TratamientoService,
    private location: Location             // ← Inyecta Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.mascotaService.getMascota(id).subscribe({
      next: data => {
        this.mascota = data;
        this.cargarTratamientos(id);
      },
      error: err => {
        console.error('Error al cargar mascota:', err);
        this.location.back();
      }
    });
  }

  cargarTratamientos(idMascota: number): void {
    this.tratamientoService.obtenerTratamientosPorMascota(idMascota).subscribe({
      next: data => this.tratamientos = data,
      error: err => console.error('Error al cargar tratamientos:', err)
    });
  }

  obtenerNombreDroga(d: Droga | number): string {
    if (typeof d === 'object') {
      return d.nombre;
    }
    const tratamiento = this.tratamientos.find(t =>
      typeof t.droga === 'object'
        ? t.droga.id === d
        : t.droga === d
    );
    return tratamiento && typeof tratamiento.droga === 'object'
      ? tratamiento.droga.nombre
      : 'Droga desconocida';
  }

  /** Regresa a la vista anterior */
  volver(): void {
    this.location.back();
  }
}
