import { Component, OnInit, AfterViewInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CitaService } from '../../services/cita.service';
import { TratamientoService } from '../../services/tratamiento.service';
import { MascotaService } from '../../services/mascota.service';
import { Cita } from '../../models/cita.model';
import { Tratamiento } from '../../models/tratamiento.model';
import { Mascota } from '../../models/mascota.model';
import Chart from 'chart.js/auto';
declare const $: any;

@Component({
  selector: 'app-dashboard-veterinario',
  templateUrl: './dashboard-veterinario.component.html',
  styleUrls: ['./dashboard-veterinario.component.css']
})
export class DashboardVeterinarioComponent implements OnInit, AfterViewInit {
  nombreVeterinario = '';
  cantidadPacientes = 0;
  cantidadCitas = 0;
  cantidadTratamientos = 0;

  constructor(
    private authSvc: AuthService,
    private citaSvc: CitaService,
    private tratSvc: TratamientoService,
    private masSvc: MascotaService
  ) {}

  ngOnInit(): void {
    this.nombreVeterinario = this.authSvc.getNombreUsuario();
    forkJoin({
      citas: this.citaSvc.obtenerTodas(),
      tratamientos: this.tratSvc.obtenerTratamientos(),
      mascotas: this.masSvc.getAllMascotas()
    }).subscribe(({ citas, tratamientos, mascotas }) => {
      this.cantidadCitas = citas.length;
      this.cantidadTratamientos = tratamientos.length;
      this.cantidadPacientes = mascotas.length;
    });
  }

  ngAfterViewInit(): void {
    // Mejorado: Área Chart
    new Chart('areaChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Sales',
          data: [30, 50, 40, 60, 50, 80, 70],
          fill: true,
          backgroundColor: 'rgba(46, 204, 113, 0.2)',
          borderColor: '#2ecc71',
          borderWidth: 3,
          pointBackgroundColor: '#27ae60',
          pointBorderColor: '#fff',
          pointRadius: 6,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#2e7d32', font: { weight: 'bold' } }
          }
        },
        scales: {
          y: { ticks: { color: '#333' } },
          x: { ticks: { color: '#333' } }
        }
      }
    });

    // Mejorado: Donut Chart
    new Chart('donutChart', {
      type: 'doughnut',
      data: {
        labels: ['USA', 'Europe', 'Asia', 'Other'],
        datasets: [{
          data: [700, 500, 400, 600],
          backgroundColor: ['#3498db', '#2ecc71', '#e67e22', '#9b59b6'],
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: '#2e7d32', font: { weight: 'bold' } }
          }
        }
      }
    });

    // Mapa (sin cambios)
    ($('#world-map') as any).vectorMap({
      map: 'us_aea_en',
      backgroundColor: 'transparent',
      regionStyle: { initial: { fill: '#e4e4e4', 'fill-opacity': 1, stroke: 'none' }},
      series: {
        regions: [{ values: { 'US-CA': 1000, 'US-TX': 500, 'US-FL': 800 }, scale: ['#C8EEFF', '#0071A4'], normalizeFunction: 'polynomial' }]
      },
      onRegionTipShow: (e: any, el: any, code: any) => {
        el.html(el.html() + ': ' + (Math.random() * 1000 | 0) + ' visits');
      }
    });
  }
}
