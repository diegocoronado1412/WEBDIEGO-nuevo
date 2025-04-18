// src/app/mascotas/mascotas-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MascotaListarComponent } from './mascota-list/mascota-list.component';
import { MascotaDetailComponent } from './mascota-detail/mascota-detail.component';
import { MascotaEditComponent } from './mascota-edit/mascota-edit.component';
import { MascotaFormComponent } from './mascota-form/mascota-form.component';

const routes: Routes = [
  { path: 'lista', component: MascotaListarComponent },
  { path: 'detalle/:id', component: MascotaDetailComponent },
  { path: 'edit/:id', component: MascotaEditComponent },
  { path: 'nuevo', component: MascotaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
