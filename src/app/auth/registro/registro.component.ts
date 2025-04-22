// src/app/auth/registro/registro.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Propiedades ligadas a ngModel en tu template
  cedula: string = '';
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) { }

  onSubmit(): void {
    // Aquí procesas el registro, p.ej. llamando a un servicio.
    // Por ahora, sólo mostramos en consola y redirigimos al login.
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Registrando:', {
      cedula: this.cedula,
      nombre: this.nombre,
      email: this.email,
      password: this.password
    });

    // Simulación de registro exitoso:
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    this.router.navigate(['/auth/login']);
  }
}
