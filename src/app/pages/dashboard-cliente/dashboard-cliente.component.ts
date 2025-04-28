import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent implements OnInit {

  nombreCliente: string = '';

  // 🔥 Agrego las propiedades para que no dé error:
  cantidadCitas: number = 0;
  cantidadRecetas: number = 0;
  cantidadCarrito: number = 0;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.nombreCliente = this.authService.getNombreUsuario();
  }
}
