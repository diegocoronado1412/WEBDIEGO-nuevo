// src/app/mascota-edit/mascota-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';               // ← Importa Location
import { Mascota } from 'src/app/models/mascota.model';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-mascota-edit',
  templateUrl: './mascota-edit.component.html',
  styleUrls: ['./mascota-edit.component.css']
})
export class MascotaEditComponent implements OnInit {
  mascota: Mascota = {} as Mascota;
  fotoSeleccionada: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private router: Router,
    private location: Location              // ← Inyecta Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mascotaService.getMascota(id).subscribe({
      next: (data) => this.mascota = data,
      error: (err) => console.error('Error al obtener mascota:', err)
    });
  }

  onFileChange(event: any): void {
    this.fotoSeleccionada = event.target.files[0];
  }

  actualizarMascota(): void {
    this.mascotaService.updateMascota(this.mascota.id, this.mascota).subscribe({
      next: () => {
        alert('Mascota actualizada con éxito');
        this.router.navigate(['/mascotas/lista']);
      },
      error: (err) => {
        console.error('Error al actualizar mascota:', err);
        alert('Error al actualizar la mascota');
      }
    });
  }

  /** Regresa a la vista anterior */
  goBack(): void {
    this.location.back();
  }
}
