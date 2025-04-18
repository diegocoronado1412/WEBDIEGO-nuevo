import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cargarClientes();  // Cargar clientes al inicializar el componente
  }

  cargarClientes(): void {
    this.clienteService.findAll().subscribe({
      next: (clientes) => {
        this.clientes = clientes;  // Asignar la lista de clientes a la variable
      },
      error: (err) => {
        console.error('Error al cargar clientes:', err);
      }
    });
  }

  eliminarCliente(id: number): void {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe({
        next: () => {
          this.clientes = this.clientes.filter(c => c.id !== id);
          console.log(`Cliente con ID ${id} eliminado`);
        },
        error: (err) => {
          console.error('Error al eliminar cliente:', err);
          alert('No se pudo eliminar el cliente.');
        }
      });
    }
  }  
}
