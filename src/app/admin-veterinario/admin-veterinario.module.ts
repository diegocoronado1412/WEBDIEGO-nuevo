import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminVeterinarioRoutingModule } from './admin-veterinario-routing.module';
import { VeterinarioListarComponent } from './veterinario-listar/veterinario-listar.component';
import { VeterinarioCrearComponent } from './veterinario-crear/veterinario-crear.component';
import { VeterinarioEditarComponent } from './veterinario-editar/veterinario-editar.component';
import { VeterinarioMenuComponent } from './veterinario-menu/veterinario-menu.component';
import { VeterinarioDetalleComponent } from './veterinario-detalle/veterinario-detalle.component'; // ✅ IMPORTARLO
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VeterinarioListarComponent,
    VeterinarioCrearComponent,
    VeterinarioEditarComponent,
    VeterinarioMenuComponent,
    VeterinarioDetalleComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminVeterinarioRoutingModule
  ]
})
export class AdminVeterinarioModule { }
