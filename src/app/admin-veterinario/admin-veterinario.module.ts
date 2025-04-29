import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminVeterinarioRoutingModule } from './admin-veterinario-routing.module';
import { VeterinarioListarComponent } from './veterinario-listar/veterinario-listar.component';
import { VeterinarioCrearComponent } from './veterinario-crear/veterinario-crear.component';
import { VeterinarioEditarComponent } from './veterinario-editar/veterinario-editar.component';
import { VeterinarioDetalleComponent } from './veterinario-detalle/veterinario-detalle.component';


@NgModule({
  declarations: [
    VeterinarioListarComponent,
    VeterinarioCrearComponent,
    VeterinarioEditarComponent,
    VeterinarioDetalleComponent
  ],
  imports: [
    CommonModule,
    AdminVeterinarioRoutingModule
  ]
})
export class AdminVeterinarioModule { }
