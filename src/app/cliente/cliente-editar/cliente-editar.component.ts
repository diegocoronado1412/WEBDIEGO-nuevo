import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {

  clientes: Cliente[] = [];
  selectedClienteId!: number;
  clienteForm!: FormGroup;

  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.clientes = clientes;
    });

    this.clienteForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cedula: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      contraseña: ['', [Validators.minLength(6)]]
    });
  }

  cargarCliente() {
    this.clienteService.getCliente(this.selectedClienteId).subscribe(cliente => {
      this.clienteForm.patchValue({
        nombre: cliente.nombre,
        cedula: cliente.cedula,
        correo: cliente.correo,
        celular: cliente.celular,
        contraseña: cliente.contrasena
      });
    });
  }

  actualizarCliente() {
    if (this.clienteForm.valid) {
      const clienteActualizado: Cliente = {
        id: this.selectedClienteId,
        ...this.clienteForm.value
      };

      this.clienteService.actualizarCliente(this.selectedClienteId, clienteActualizado).subscribe(() => {
        console.log('Cliente actualizado');
        alert('Cliente actualizado correctamente');
      });
    } else {
      console.error('Formulario inválido');
      alert('Por favor complete los campos correctamente');
    }
  }
}
