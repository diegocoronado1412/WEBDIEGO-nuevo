// src/app/cliente/cliente.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';           // *ngIf, pipes (currency…)
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ngModel, ngValue
import { RouterModule } from '@angular/router';           // routerLink, routerLinkActive
import { HttpClientModule } from '@angular/common/http';

import { ClienteRoutingModule } from './cliente-routing.module';

import { ClienteCrearComponent } from './cliente-crear/cliente-crear.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClientePerfilComponent } from './cliente-perfil/cliente-perfil.component';
import { ClienteMascotasComponent } from './cliente-mascotas/cliente-mascotas.component';
import { ClienteTratamientosComponent } from './cliente-tratamientos/cliente-tratamientos.component';
import { ClienteVeterinarioMascotasSeleccionarComponent } from './cliente-veterinario-mascotas-seleccionar/cliente-veterinario-mascotas-seleccionar.component';

@NgModule({
  declarations: [
    ClienteCrearComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    ClientePerfilComponent,
    ClienteMascotasComponent,
    ClienteTratamientosComponent,
    ClienteVeterinarioMascotasSeleccionarComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,             
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
