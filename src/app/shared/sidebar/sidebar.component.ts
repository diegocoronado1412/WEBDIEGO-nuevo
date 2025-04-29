import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { AuthService }       from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  rol: 'cliente' | 'veterinario' = 'cliente';

  // authService debe ser público para poder usar su método en la plantilla
  constructor(
    public authService: AuthService,
    private router:     Router
  ) {}

  ngOnInit(): void {
    this.authService.getUsuarioActual().subscribe(user => {
      this.rol = (user.role || '').toLowerCase() as any;
    });
  }

  // Método de logout, invocado desde la plantilla
  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
