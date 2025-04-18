import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCrearComponent } from './cliente-crear/cliente-crear.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClientePerfilComponent } from './cliente-perfil/cliente-perfil.component';
import { ClienteMascotasComponent } from './cliente-mascotas/cliente-mascotas.component';
// ...otros componentes

const routes: Routes = [
  { path: 'crear', component: ClienteCrearComponent },
  { path: 'editar/:id', component: ClienteEditarComponent },
  { path: 'listar', component: ClienteListarComponent },
  { path: 'perfil/:id', component: ClientePerfilComponent },
  { path: 'mascotas', component: ClienteMascotasComponent },
  // ...
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
