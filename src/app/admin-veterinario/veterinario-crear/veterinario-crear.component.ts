import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarioService, Veterinario } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-veterinario-crear',
  templateUrl: './veterinario-crear.component.html',
  styleUrls: ['./veterinario-crear.component.css']
})
export class VeterinarioCrearComponent {
  veterinario: Veterinario = {
    id: 0,
    nombre: '',
    cedula: '',
    correo: '',
    celular: ''
    // Inicializa otros campos según tu modelo
  };

  constructor(private veterinarioService: VeterinarioService, private router: Router) { }

  guardarVeterinario(): void {
    this.veterinarioService.crear(this.veterinario).subscribe({
      next: () => this.router.navigate(['/admin-veterinario']),
      error: (err) => console.error('Error al crear veterinario:', err)
    });
  }
}
