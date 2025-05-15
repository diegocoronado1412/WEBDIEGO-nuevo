// src/app/mascota-form/mascota-form.component.ts

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';       // ← Importa Location
import { MascotaService } from 'src/app/services/mascota.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Mascota } from 'src/app/models/mascota.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent implements OnInit {

  mascota: Mascota = {} as Mascota;
  clientes: Cliente[] = [];
  clienteCedula: string = '';
  fotoSeleccionada: File | null = null;

  constructor(
    private mascotaService: MascotaService,
    private clienteService: ClienteService,
    private router: Router,
    private location: Location      // ← Inyecta Location
  ) {}

  ngOnInit(): void {
    this.clienteService.findAll().subscribe({
      next: (clientes) => this.clientes = clientes,
      error: (err) => console.error('Error al cargar clientes', err)
    });
  }

  onFileChange(event: any): void {
    this.fotoSeleccionada = event.target.files[0];
  }

  guardarMascota(): void {
    if (this.clienteCedula && this.mascota.nombre && this.mascota.especie) {
      this.mascotaService.createMascota(this.mascota, this.clienteCedula).subscribe({
        next: () => {
          alert('Mascota registrada exitosamente');
          this.router.navigate(['/mascotas/lista']);
        },
        error: (err) => {
          console.error('Error al guardar mascota:', err);
          alert('Error al registrar mascota');
        }
      });
    } else {
      alert('Por favor completa todos los campos obligatorios');
    }
  }

  /** Método para regresar a la vista anterior */
  goBack(): void {
    this.location.back();
  }
}
