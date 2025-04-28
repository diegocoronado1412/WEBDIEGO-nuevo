import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-veterinario',
  templateUrl: './dashboard-veterinario.component.html',
  styleUrls: ['./dashboard-veterinario.component.css']
})
export class DashboardVeterinarioComponent implements OnInit {

  nombreVeterinario: string = '';

  // 🔥 Agrego las propiedades para que no dé error:
  cantidadPacientes: number = 0;
  cantidadCitas: number = 0;
  cantidadTratamientos: number = 0;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.nombreVeterinario = this.authService.getNombreUsuario();
  }
}
