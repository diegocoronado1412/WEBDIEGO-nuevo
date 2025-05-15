// src/app/cliente/cliente-tratamientos/cliente-tratamientos.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService }    from 'src/app/services/cliente.service';
import { MascotaService }    from 'src/app/services/mascota.service';
import { TratamientoService }from 'src/app/services/tratamiento.service';

import { Cliente }      from 'src/app/models/cliente.model';
import { Mascota }      from 'src/app/models/mascota.model';
import { Tratamiento }  from 'src/app/models/tratamiento.model';
import { Droga }        from 'src/app/models/droga.model';
import { Veterinario }  from 'src/app/models/veterinario.model';

@Component({
  selector: 'app-cliente-tratamientos',
  templateUrl: './cliente-tratamientos.component.html',
  styleUrls: ['./cliente-tratamientos.component.css']
})
export class ClienteTratamientosComponent implements OnInit {
  cliente: Cliente      = {} as Cliente;
  clientes: Cliente[]   = [];
  mascotas: Mascota[]   = [];
  tratamientos: Tratamiento[] = [];

  selectedClienteCedula!: string;
  selectedMascotaId!: number;

  constructor(
    private clienteService: ClienteService,
    private mascotaService: MascotaService,
    private tratamientoService: TratamientoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(clis => {
      this.clientes = clis;
      if (clis.length > 0) {
        this.selectedClienteCedula = clis[0].cedula;
        this.cliente               = clis[0];
        this.loadMascotas(this.selectedClienteCedula);
      }
    });
  }

  loadMascotas(cedula: string): void {
    this.mascotaService.getMascotasByCliente(cedula).subscribe({
      next: ms => this.mascotas = ms,
      error: err => console.error('Error al cargar mascotas:', err)
    });
  }

  selectCliente(): void {
    const cli = this.clientes.find(c => c.cedula === this.selectedClienteCedula);
    if (!cli) return;
    this.cliente = cli;
    this.loadMascotas(cli.cedula);
    this.tratamientos = []; // limpia tratamientos previos
  }

  selectMascota(): void {
    this.tratamientoService
      .obtenerTratamientosPorMascota(this.selectedMascotaId)
      .subscribe({
        next: tr => this.tratamientos = tr,
        error: err => console.error('Error al cargar tratamientos:', err)
      });
  }

  logout(): void {
    // localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  // Helpers para la plantilla:
  getDrogaNombre(d: Droga|number): string {
    return typeof d === 'object' ? d.nombre : '';
  }
  getDrogaPrecio(d: Droga|number): number {
    return typeof d === 'object' ? d.precioVenta : 0;
  }
  getVeterinarioNombre(v?: Veterinario): string {
    return v?.nombre ?? '';
  }
}
