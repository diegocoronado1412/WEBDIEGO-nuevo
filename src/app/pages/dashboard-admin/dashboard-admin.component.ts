import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  nombreAdmin: string = 'Administrador';
  cantidadVeterinarios: number = 0;
  cantidadMascotas: number = 0;
  cantidadClientes: number = 0;
  cantidadTratamientos: number = 0;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  };

  public barChartType: 'bar' = 'bar'; 
  public barChartData: ChartData<'bar'> = {
    labels: ['Veterinarios', 'Mascotas', 'Clientes', 'Tratamientos'],
    datasets: [
      {
        data: [0, 0, 0, 0],
        label: 'Cantidad total',
        backgroundColor: '#f48fb1'
      }
    ]
  };

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerInfoAdmin();
    this.obtenerCantidadVeterinarios();
    this.obtenerCantidadMascotas();
    this.obtenerCantidadClientes();
    this.obtenerCantidadTratamientos();
  }

  obtenerInfoAdmin(): void {}

  obtenerCantidadVeterinarios(): void {
    this.adminService.getVeterinarios().subscribe({
      next: (veterinarios: any[]) => {
        this.cantidadVeterinarios = veterinarios.length;
        this.actualizarGrafica();
      },
      error: (err: any) => console.error('Error obteniendo veterinarios:', err)
    });
  }

  obtenerCantidadMascotas(): void {
    this.adminService.getMascotas().subscribe({
      next: (mascotas: any[]) => {
        this.cantidadMascotas = mascotas.length;
        this.actualizarGrafica();
      },
      error: (err: any) => console.error('Error obteniendo mascotas:', err)
    });
  }

  obtenerCantidadClientes(): void {
    this.adminService.getClientes().subscribe({
      next: (clientes: any[]) => {
        this.cantidadClientes = clientes.length;
        this.actualizarGrafica();
      },
      error: (err: any) => console.error('Error obteniendo clientes:', err)
    });
  }

  obtenerCantidadTratamientos(): void {
    this.adminService.getTratamientos().subscribe({
      next: (tratamientos: any[]) => {
        this.cantidadTratamientos = tratamientos.length;
        this.actualizarGrafica();
      },
      error: (err: any) => console.error('Error obteniendo tratamientos:', err)
    });
  }

  actualizarGrafica(): void {
    this.barChartData.datasets[0].data = [
      this.cantidadVeterinarios,
      this.cantidadMascotas,
      this.cantidadClientes,
      this.cantidadTratamientos
    ];
    this.chart?.update(); // 🔁 Fuerza actualización visual
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
