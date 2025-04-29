import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from 'src/app/services/admin.service'; // 👈 Nuevo import
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  nombreAdmin: string = 'Administrador';
  cantidadVeterinarios: number = 0;
  cantidadMascotas: number = 0;
  cantidadClientes: number = 0;

  constructor(
    private authService: AuthService,
    private adminService: AdminService, // 👈 Nuevo en el constructor
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerInfoAdmin();
    this.obtenerCantidadVeterinarios();
    this.obtenerCantidadMascotas();
    this.obtenerCantidadClientes();
  }

  obtenerInfoAdmin(): void {
    // Si no tienes endpoint para esto aún, puedes dejarlo así por ahora
    // this.authService.getUsuarioActual().subscribe({
    //   next: (data: any) => {
    //     this.nombreAdmin = data.usuario || 'Administrador';
    //   },
    //   error: (err: any) => {
    //     console.error('Error obteniendo información del admin:', err);
    //   }
    // });
  }

  obtenerCantidadVeterinarios(): void {
    this.adminService.getVeterinarios().subscribe({
      next: (veterinarios: any[]) => {
        this.cantidadVeterinarios = veterinarios.length;
      },
      error: (err: any) => {
        console.error('Error obteniendo veterinarios:', err);
      }
    });
  }

  obtenerCantidadMascotas(): void {
    this.adminService.getMascotas().subscribe({
      next: (mascotas: any[]) => {
        this.cantidadMascotas = mascotas.length;
      },
      error: (err: any) => {
        console.error('Error obteniendo mascotas:', err);
      }
    });
  }

  obtenerCantidadClientes(): void {
    this.adminService.getClientes().subscribe({
      next: (clientes: any[]) => {
        this.cantidadClientes = clientes.length;
      },
      error: (err: any) => {
        console.error('Error obteniendo clientes:', err);
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
