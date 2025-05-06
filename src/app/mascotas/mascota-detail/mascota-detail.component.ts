import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.mascotaService.getMascota(id).subscribe({
      next: (data) => {
        this.mascota = data;
        this.cargarTratamientos(id);
      },
      error: (err) => {
        console.error('Error al cargar mascota:', err);
        this.router.navigate(['/mascotas']);
      }
    });
  }

  cargarTratamientos(idMascota: number): void {
    this.tratamientoService.obtenerTratamientosPorMascota(idMascota).subscribe({
      next: (data) => this.tratamientos = data,
      error: (err) => console.error('Error al cargar tratamientos:', err)
    });
  }

  obtenerNombreDroga(d: Droga | number): string {
    if (typeof d === 'object') return d.nombre;
    const tratamiento = this.tratamientos.find(t => {
      if (typeof t.droga === 'object') {
        return t.droga.id === d;
      }
      return t.droga === d;
    });
    if (tratamiento && typeof tratamiento.droga === 'object') {
      return tratamiento.droga.nombre;
    }
    return 'Droga desconocida';
  }

  volver(): void {
    this.router.navigate(['/mascotas/lista']);
  }
}
