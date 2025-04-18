// src/app/mascotas/mascotas.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MascotasRoutingModule } from './mascotas-routing.module';

import { MascotaDetailComponent } from './mascota-detail/mascota-detail.component';
import { MascotaEditComponent } from './mascota-edit/mascota-edit.component';
import { MascotaFormComponent } from './mascota-form/mascota-form.component';
import { MascotaListarComponent } from './mascota-list/mascota-list.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClienteRoutingModule } from '../cliente/cliente-routing.module';

@NgModule({
  declarations: [
    MascotaDetailComponent,
    MascotaEditComponent,
    MascotaFormComponent,
    MascotaListarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MascotasRoutingModule
  ]
})
export class MascotasModule { }
