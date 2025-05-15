// src/app/cliente/cliente-perfil/cliente-perfil.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.component.html',
  styleUrls: ['./cliente-perfil.component.css']
})
export class ClientePerfilComponent implements OnInit {

  cliente: Cliente | null = null;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtiene el id del cliente desde la URL
    const idCliente = Number(this.route.snapshot.paramMap.get('id'));
    this.clienteService.getCliente(idCliente).subscribe(
      data => {
        this.cliente = data;
      },
      error => {
        console.error('Error al obtener cliente', error);
      }
    );
  }

  // Método para guardar cambios en el perfil
  guardarCambios(): void {
    if (!this.cliente) {
      return;
    }
    this.clienteService.actualizarCliente(this.cliente.id, this.cliente).subscribe(
      response => {
        console.log('Cliente actualizado con éxito', response);
      },
      error => {
        console.error('Error al actualizar cliente', error);
      }
    );
  }

  // Método para cerrar sesión y redirigir al login
  logout(): void {
    // Si estás guardando token o datos en localStorage/sessionStorage, límpialos aquí:
    // localStorage.removeItem('authToken');
    // localStorage.removeItem('currentUser');
    // Luego redirige a la página de login
    this.router.navigate(['/login']);
  }
}
