import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  cedula: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.cedula || !this.password) {
      this.error = 'Todos los campos son obligatorios';
      return;
    }
  
    this.authService.login(this.cedula, this.password).subscribe({
      next: (data) => {
        console.log('Login exitoso:', data);
        
        const rawRole = data.role || data.rol;
        const rol = rawRole?.toLowerCase() || '';
  
        console.log('Rol procesado:', rol);
  
        if (rol === 'cliente') {
          this.router.navigate(['/dashboard-cliente']);
        } else if (rol === 'veterinario') {
          this.router.navigate(['/dashboard-veterinario']);
        } else if (rol === 'admin') { 
          this.router.navigate(['/dashboard-admin']);
        } else {
          console.warn('Rol desconocido:', rawRole);
          this.error = 'Rol no reconocido';
        }
        
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.error = 'Cédula o contraseña incorrecta';
      }
    });
  }
}