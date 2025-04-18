import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { Mascota } from 'src/app/models/mascota.model';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-cliente-mascotas',
  templateUrl: './cliente-mascotas.component.html',
  styleUrls: ['./cliente-mascotas.component.css']
})
export class ClienteMascotasComponent implements OnInit {
  cliente: Cliente = {} as Cliente;
  clientes: Cliente[] = [];
  mascotas: Mascota[] = [];
  selectedClienteCedula!: string;  // ✅ Usamos la cédula

  constructor(
    private clienteService: ClienteService,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.clientes = clientes;
      if (clientes.length > 0) {
        this.selectedClienteCedula = clientes[0].cedula;  // ✅ Primer cliente por cédula
        this.loadMascotas(this.selectedClienteCedula);
      }
    });
  }

  // ✅ Cargar mascotas usando la cédula
  loadMascotas(cedula: string): void {
    this.mascotaService.getMascotasByCliente(cedula).subscribe({
      next: (mascotas) => {
        this.mascotas = mascotas;
      },
      error: (error) => {
        console.error('Error al cargar mascotas:', error);
      }
    });
  }

  // ✅ Cuando el usuario selecciona un cliente
  selectCliente(): void {
    this.loadMascotas(this.selectedClienteCedula);
  }
}
