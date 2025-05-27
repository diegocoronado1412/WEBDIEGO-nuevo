import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarioService } from 'src/app/services/veterinario.service';
import { Location } from '@angular/common';  // 👈 Importar Location

@Component({
  selector: 'app-veterinario-listar',
  templateUrl: './veterinario-listar.component.html',
  styleUrls: ['./veterinario-listar.component.css']
})
export class VeterinarioListarComponent implements OnInit {
  veterinarios: any[] = [];

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router,
    private location: Location   // 👈 Inyectar Location
  ) {}

  ngOnInit(): void {
    this.veterinarioService.obtenerTodos().subscribe({
      next: data => this.veterinarios = data,
      error: err => console.error('Error al cargar veterinarios:', err)
    });
  }

  irAEditar(cedula: string): void {
    this.router.navigate(['/admin-veterinario/editar', cedula]);
  }
  
  irADetalle(cedula: string): void {
    this.router.navigate(['/admin-veterinario/detalle', cedula]);
  }
  
  eliminar(cedula: string): void {
    if (confirm('¿Está seguro de eliminar este veterinario?')) {
      this.veterinarioService.eliminar(cedula).subscribe(() => {
        this.veterinarios = this.veterinarios.filter(v => v.cedula !== cedula);
      });
    }
  }

  goBack(): void {
    this.location.back();   // 👈 Método para volver atrás
  }
}
