// src/app/auth/registro/registro.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';             // ← Importa Location
import { AuthService, RegisterPayload } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  cedula = '';
  nombre = '';
  email = '';
  rol: 'cliente' | 'veterinario' = 'cliente';
  password = '';
  confirmPassword = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location                         // ← Inyecta Location
  ) {}

  onSubmit(): void {
    this.error = '';  // limpia el error previo

    // 1) Validar que las contraseñas coincidan
    if (this.password !== this.confirmPassword) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    // 2) Construir payload
    const payload: RegisterPayload = {
      cedula: this.cedula,
      nombre: this.nombre,
      correo: this.email,
      rol: this.rol,
      password: this.password
    };

    // 3) Llamar al servicio de registro
    this.authService.register(payload).subscribe({
      next: () => {
        alert(`Registro exitoso como ${this.rol}. Ahora puedes iniciar sesión.`);
        this.router.navigate(['/auth/login']);
      },
      error: err => {
        console.error('Error en registro:', err);
        this.error = err.error?.message || 'Ocurrió un error al registrar la cuenta.';
      }
    });
  }

  /** Regresa a la vista anterior */
  goBack(): void {
    this.location.back();
  }
}
