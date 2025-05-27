// src/app/pages/dashboard-cliente/dashboard-cliente.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { forkJoin }                         from 'rxjs';
import Chart                                from 'chart.js/auto';

import { AuthService }    from '../../services/auth.service';
import { CitaService }    from '../../services/cita.service';
import { RecetaService }  from '../../services/receta.service';
import { CarritoService } from '../../services/carrito.service';

import { Cita }           from '../../models/cita.model';
import { Receta }         from '../../models/receta.model';
import { CarritoItem }    from '../../models/carrito-item.model';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls:   ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent implements OnInit, AfterViewInit {

  nombreCliente   = '';
  cantidadCitas   = 0;
  cantidadRecetas = 0;
  cantidadCarrito = 0;

  constructor(
    private authSvc:    AuthService,
    private citaSvc:    CitaService,
    private recetaSvc:  RecetaService,
    private carritoSvc: CarritoService
  ) {}

  ngOnInit(): void {
    this.nombreCliente = this.authSvc.getNombreUsuario();

    forkJoin({
      citas:    this.citaSvc.obtenerTodas(),
      recetas:  this.recetaSvc.obtenerActivas(),
      carrito:  this.carritoSvc.obtenerItems()
    }).subscribe(({ citas, recetas, carrito }) => {
      this.cantidadCitas   = citas.length;
      this.cantidadRecetas = recetas.length;
      this.cantidadCarrito = carrito.length;
    }, err => {
      console.error('Error cargando datos de cliente:', err);
    });
  }

  ngAfterViewInit(): void {
    // Chart de líneas para Citas (mejorado)
    new Chart('citasChart', {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Citas',
          data: [5, 8, 6, 10, 7, 12, 9],
          fill: true,
          backgroundColor: 'rgba(46, 125, 50, 0.2)',  // Verde claro
          borderColor: '#2e7d32',                     // Verde fuerte
          borderWidth: 3,
          tension: 0.4,
          pointBackgroundColor: '#2e7d32',
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { font: { size: 14 }, color: '#333' } }
        },
        scales: {
          x: { grid: { color: '#e0e0e0' }, ticks: { color: '#333' } },
          y: { grid: { color: '#e0e0e0' }, ticks: { color: '#333' } }
        }
      }
    });

    // Donut para Recetas vs Carrito (mejorado)
    new Chart('recetasDonut', {
      type: 'doughnut',
      data: {
        labels: ['Recetas', 'Carrito'],
        datasets: [{
          data: [this.cantidadRecetas, this.cantidadCarrito],
          backgroundColor: ['#66bb6a', '#42a5f5'],
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { size: 14 }, color: '#333' } }
        }
      }
    });
  }
}
