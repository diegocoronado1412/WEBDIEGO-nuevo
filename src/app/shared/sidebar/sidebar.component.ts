import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  rol: 'cliente' | 'veterinario' = 'cliente';
  clienteId: number | null = null;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getUsuarioActual().subscribe({
      next: (user) => {
        this.rol = (user.role || user.rol || '').toLowerCase() as any;

        // ✅ Intentamos obtener el ID desde 'id', si no existe usamos 'cedula'
        const rawId = user.id ?? user.cedula;

        if (rawId !== undefined && !isNaN(Number(rawId))) {
          this.clienteId = Number(rawId);
          console.log('🔍 ID del cliente cargado en sidebar:', this.clienteId);
        } else {
          console.warn('⚠️ No se encontró un ID válido para el cliente en la respuesta:', user);
          this.clienteId = null;
        }
      },
      error: (err) => {
        console.error('❌ Error al obtener usuario actual:', err);
        this.clienteId = null;
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
