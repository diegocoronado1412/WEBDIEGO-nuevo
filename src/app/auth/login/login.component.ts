import { Component } from '@angular/core';
 // ajusta ruta si cambia
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';

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
  
        // Redireccionar según el rol
        if (data.role === 'CLIENTE') {
          const clienteId = data.userId; // 🔥 AQUÍ ESTÁ LA CLAVE
          this.router.navigate(['/cliente/perfil', clienteId]);
        } else if (data.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (data.role === 'VETERINARIO') {
          this.router.navigate(['/veterinario']);
        }
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.error = 'Cédula o contraseña incorrecta';
      }
    });
  }
  
}
