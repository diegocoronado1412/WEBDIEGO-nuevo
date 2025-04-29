// src/app/pages/dashboard-veterinario/dashboard-veterinario.component.ts

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { forkJoin }                        from 'rxjs';
import { AuthService }                     from '../../services/auth.service';
import { CitaService }                     from '../../services/cita.service';
import { TratamientoService }              from '../../services/tratamiento.service';
import { MascotaService }                  from '../../services/mascota.service';
import { Cita }                            from '../../models/cita.model';
import { Tratamiento }                     from '../../models/tratamiento.model';
import { Mascota }                         from '../../models/mascota.model';
import Chart                               from 'chart.js/auto';
declare const $: any; // Para jQuery / jvectormap

@Component({
  selector: 'app-dashboard-veterinario',
  templateUrl: './dashboard-veterinario.component.html',
  styleUrls:   ['./dashboard-veterinario.component.css']
})
export class DashboardVeterinarioComponent implements OnInit, AfterViewInit {
  nombreVeterinario    = '';
  cantidadPacientes    = 0;
  cantidadCitas        = 0;
  cantidadTratamientos = 0;

  // configuración de las small boxes
  smallBoxes = [
    { color: 'info',    icon: 'shopping-bag',   label: 'New Orders',        value: 150 },
    { color: 'success', icon: 'chart-line',     label: 'Bounce Rate',       value: '53%' },
    { color: 'warning', icon: 'user-plus',      label: 'User Registrations',value: 44 },
    { color: 'danger',  icon: 'chart-pie',      label: 'Unique Visitors',   value: 65 }
  ];

  constructor(
    private authSvc: AuthService,
    private citaSvc: CitaService,
    private tratSvc: TratamientoService,
    private masSvc:  MascotaService
  ) {}

  ngOnInit(): void {
    // 1) Nombre de usuario
    this.nombreVeterinario = this.authSvc.getNombreUsuario();

    // 2) Carga de contadores (puedes ajustar con datos reales)
    forkJoin({
      citas:        this.citaSvc.obtenerTodas(),
      tratamientos: this.tratSvc.obtenerTratamientos(),
      mascotas:     this.masSvc.getAllMascotas()
    }).subscribe(({ citas, tratamientos, mascotas }) => {
      this.cantidadCitas        = citas.length;
      this.cantidadTratamientos = tratamientos.length;
      this.cantidadPacientes    = mascotas.length;
    });
  }

  ngAfterViewInit(): void {
    // Área chart
    new Chart('areaChart', {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{ 
          label: 'Sales',
          data: [30,50,40,60,50,80,70],
          fill: true,
          backgroundColor: 'rgba(60,141,188,0.2)',
          borderColor: 'rgba(60,141,188,1)'
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    // Donut chart
    new Chart('donutChart', {
      type: 'doughnut',
      data: {
        labels: ['USA','Europe','Asia','Other'],
        datasets: [{
          data: [700,500,400,600],
          backgroundColor: ['#f56954','#00a65a','#f39c12','#00c0ef']
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    // Vector map de USA
    ($('#world-map') as any).vectorMap({
      map: 'us_aea_en',
      backgroundColor: 'transparent',
      regionStyle: { initial: { fill: '#e4e4e4', 'fill-opacity':1, stroke:'none' }},
      series: {
        regions: [{
          values: { 'US-CA':1000, 'US-TX':500, 'US-FL':800 },
          scale: ['#C8EEFF','#0071A4'], normalizeFunction: 'polynomial'
        }]
      },
      onRegionTipShow: (e: any, el: any, code: any) => {
        el.html(el.html() + ': ' + (Math.random()*1000|0) + ' visits');
      }
    });
  }
}
