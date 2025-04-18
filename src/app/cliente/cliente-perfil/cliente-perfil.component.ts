import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtiene el id del cliente desde la URL
    const idCliente = Number(this.route.snapshot.paramMap.get('id'));  // Asegúrate de que esta ruta tenga un parámetro "id"
    this.clienteService.getCliente(idCliente).subscribe(
      (data) => {
        this.cliente = data;
      },
      (error) => {
        console.error('Error al obtener cliente', error);
      }
    );
  }

  // Método para guardar cambios (si es necesario)
  guardarCambios(): void {
    if (this.cliente) {
      this.clienteService.actualizarCliente(this.cliente.id, this.cliente).subscribe(
        (response) => {
          console.log('Cliente actualizado con éxito', response);
        },
        (error) => {
          console.error('Error al actualizar cliente', error);
        }
      );
    }
  }
}
