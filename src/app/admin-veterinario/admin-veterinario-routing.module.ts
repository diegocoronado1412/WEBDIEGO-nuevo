import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeterinarioListarComponent } from './veterinario-listar/veterinario-listar.component';
import { VeterinarioCrearComponent } from './veterinario-crear/veterinario-crear.component';
import { VeterinarioEditarComponent } from './veterinario-editar/veterinario-editar.component';
import { VeterinarioDetalleComponent } from './veterinario-detalle/veterinario-detalle.component';

const routes: Routes = [
  { path: '', component: VeterinarioListarComponent },
  { path: 'crear', component: VeterinarioCrearComponent },
  { path: 'editar/:id', component: VeterinarioEditarComponent },
  { path: 'detalle/:id', component: VeterinarioDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminVeterinarioRoutingModule { }
