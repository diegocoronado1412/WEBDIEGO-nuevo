import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota.model';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-mascota-lista',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListarComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.cargarMascotas();
  }

  cargarMascotas(): void {
    this.mascotaService.getAllMascotas().subscribe({
      next: (mascotas) => {
        this.mascotas = mascotas;
      },
      error: (err) => {
        console.error('Error al cargar mascotas:', err);
      }
    });
  }

  eliminarMascota(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta mascota?')) {
      this.mascotaService.deleteMascota(id).subscribe({
        next: () => {
          this.mascotas = this.mascotas.filter(m => m.id !== id);
          console.log(`Mascota con ID ${id} eliminada`);
        },
        error: (err) => {
          console.error('Error al eliminar mascota:', err);
        }
      });
    }
  }
}
