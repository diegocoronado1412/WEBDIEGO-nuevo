import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarioService } from 'src/app/services/veterinario.service';
import { Location } from '@angular/common';   // Importar Location para goBack

@Component({
  selector: 'app-veterinario-crear',
  templateUrl: './veterinario-crear.component.html',
  styleUrls: ['./veterinario-crear.component.css']
})
export class VeterinarioCrearComponent {
  veterinario = {
    nombre: '',
    cedula: '',
    especialidad: '',
    fotoUrl: '',
    contrasena: '',      // 👈 sin ñ
    correo: '',          // 👈 agregar
    celular: '',         // 👈 agregar
    rol: 'veterinario',
    numeroAtenciones: 0
  };

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router,
    private location: Location   // Inyectar Location
  ) {}

  guardar(): void {
    this.veterinarioService.crear(this.veterinario).subscribe({
      next: () => {
        alert('Veterinario creado exitosamente.');
        this.router.navigate(['/admin-veterinario/listar']);
      },
      error: err => {
        console.error('Error al crear veterinario:', err);
        alert('Error al crear veterinario.');
      }
    });
  }

  goBack(): void {
    this.location.back();   // Método para volver atrás
  }
}
