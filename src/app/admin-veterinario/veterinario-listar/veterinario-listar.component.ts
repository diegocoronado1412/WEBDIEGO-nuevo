import { Component, OnInit } from '@angular/core';
import { VeterinarioService, Veterinario } from 'src/app/services/veterinario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veterinario-listar',
  templateUrl: './veterinario-listar.component.html',
  styleUrls: ['./veterinario-listar.component.css']
})
export class VeterinarioListarComponent implements OnInit {
  veterinarios: Veterinario[] = [];

  constructor(private veterinarioService: VeterinarioService, private router: Router) { }

  ngOnInit(): void {
    this.veterinarioService.obtenerTodos().subscribe({
      next: (data) => this.veterinarios = data,
      error: (err) => console.error('Error al obtener veterinarios:', err)
    });
  }

  editarVeterinario(id: number): void {
    this.router.navigate(['/admin-veterinario/editar', id]);
  }

  verDetalle(id: number): void {
    this.router.navigate(['/admin-veterinario/detalle', id]);
  }

  eliminarVeterinario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este veterinario?')) {
      this.veterinarioService.eliminar(id).subscribe({
        next: () => this.veterinarios = this.veterinarios.filter(v => v.id !== id),
        error: (err) => console.error('Error al eliminar veterinario:', err)
      });
    }
  }
}
