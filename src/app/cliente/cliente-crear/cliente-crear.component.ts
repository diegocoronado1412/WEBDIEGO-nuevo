import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-crear',
  templateUrl: './cliente-crear.component.html',
  styleUrls: ['./cliente-crear.component.css']
})
export class ClienteCrearComponent {

  clienteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {
    // Inicialización del formulario
    this.clienteForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cedula: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Método para enviar el formulario y crear el cliente
  crearCliente(): void {
    if (this.clienteForm.valid) {
      const cliente = this.clienteForm.value;
      cliente.rol = 'cliente'; // Asignar el rol de cliente

      this.clienteService.registrarCliente(cliente).subscribe({
        next: () => {
          alert('Cliente creado correctamente');
          this.router.navigate(['/cliente/tablaClientes']); // Redirigir a la tabla de clientes
        },
        error: (error) => {
          console.error('Error al crear cliente:', error);
          alert('Error al crear el cliente');
        }
      });
    } else {
      this.marcarCamposInvalidos();
      alert('Por favor, complete todos los campos requeridos correctamente');
    }
  }

  // Marcar los campos inválidos para mostrar los errores
  marcarCamposInvalidos(): void {
    Object.keys(this.clienteForm.controls).forEach(key => {
      const control = this.clienteForm.get(key);
      if (control?.invalid) {
        control.markAsTouched();
      }
    });
  }

}
