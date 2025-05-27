import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VeterinarioService, Veterinario } from 'src/app/services/veterinario.service';
import { Location } from '@angular/common';   // 👈 Importar Location

@Component({
  selector: 'app-veterinario-detalle',
  templateUrl: './veterinario-detalle.component.html',
  styleUrls: ['./veterinario-detalle.component.css']
})
export class VeterinarioDetalleComponent implements OnInit {
  veterinario: Veterinario | null = null;

  constructor(
    private route: ActivatedRoute,
    private veterinarioService: VeterinarioService,
    private location: Location   // 👈 Inyectar Location
  ) {}

  ngOnInit(): void {
    const cedula = this.route.snapshot.paramMap.get('cedula'); 

    if (cedula) {
      this.veterinarioService.obtenerPorCedula(cedula).subscribe({
        next: (data: Veterinario) => {
          this.veterinario = data;
        },
        error: (err: any) => {
          console.error('Error al obtener detalle del veterinario:', err);
        }
      });
    }
  }

  goBack(): void {
    this.location.back();   // 👈 Método para volver atrás
  }
}
