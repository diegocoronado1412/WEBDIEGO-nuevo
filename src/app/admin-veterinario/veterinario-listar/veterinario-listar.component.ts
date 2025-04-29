import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-veterinario-listar',
  templateUrl: './veterinario-listar.component.html',
  styleUrls: ['./veterinario-listar.component.css']
})
export class VeterinarioListarComponent implements OnInit {
  veterinarios: any[] = [];

  constructor(private veterinarioService: VeterinarioService, private router: Router) {}

  ngOnInit(): void {
    this.veterinarioService.obtenerTodos().subscribe({
      next: data => this.veterinarios = data,
      error: err => console.error('Error al cargar veterinarios:', err)
    });
  }

  irAEditar(id: number): void {
    this.router.navigate(['/admin-veterinario/editar', id]);
  }

  irADetalle(id: number): void {
    this.router.navigate(['/admin-veterinario/detalle', id]);
  }

  eliminar(id: number): void {
    if (confirm('¿Está seguro de eliminar este veterinario?')) {
      this.veterinarioService.eliminar(id).subscribe(() => {
        this.veterinarios = this.veterinarios.filter(v => v.id !== id);
      });
    }
  }
}
