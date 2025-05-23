import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ClienteService } from 'src/app/services/cliente.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { AuthService } from 'src/app/services/auth.service';
import { Mascota } from 'src/app/models/mascota.model';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-cliente-mascotas',
  templateUrl: './cliente-mascotas.component.html',
  styleUrls: ['./cliente-mascotas.component.css']
})
export class ClienteMascotasComponent implements OnInit {
  cliente!: Cliente;
  clientes: Cliente[] = [];
  mascotas: Mascota[] = [];
  selectedClienteCedula!: string;

  // Rol leído desde localStorage (guardado al iniciar sesión)
  role: 'cliente' | 'veterinario' = localStorage.getItem('userRole') === 'veterinario'
    ? 'veterinario'
    : 'cliente';

  constructor(
    private clienteService: ClienteService,
    private mascotaService: MascotaService,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.clientes = clientes;
      if (clientes.length > 0) {
        this.selectedClienteCedula = clientes[0].cedula;
        this.loadMascotas(this.selectedClienteCedula);
      }
    });
  }

  loadMascotas(cedula: string): void {
    this.mascotaService.getMascotasByCliente(cedula).subscribe({
      next: mascotas => this.mascotas = mascotas,
      error: err => console.error('Error al cargar mascotas:', err)
    });
  }

  selectCliente(): void {
    this.loadMascotas(this.selectedClienteCedula);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goBack(): void {
    this.location.back();
  }
}
