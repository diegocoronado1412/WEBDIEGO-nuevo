import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';
import { Mascota } from 'src/app/models/mascota.model';

@Component({
  selector: 'app-mascota-detail',
  templateUrl: './mascota-detail.component.html',
  styleUrls: ['./mascota-detail.component.css']
})
export class MascotaDetailComponent implements OnInit {
  mascota: Mascota | null = null;

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mascotaService.getMascota(id).subscribe({
      next: (data) => this.mascota = data,
      error: (err) => {
        console.error('Error al cargar mascota:', err);
        this.router.navigate(['/mascotas']);
      }
    });
  }

  volver(): void {
    this.router.navigate(['/mascotas/lista']);
  }
}
