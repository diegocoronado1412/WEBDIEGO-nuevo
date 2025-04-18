import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteRoutingModule } from './cliente-routing.module';

import { ClienteCrearComponent } from './cliente-crear/cliente-crear.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClientePerfilComponent } from './cliente-perfil/cliente-perfil.component';
import { HttpClientModule as HttpClient, HttpClientModule } from '@angular/common/http';
import { ClienteMascotasComponent } from './cliente-mascotas/cliente-mascotas.component';


@NgModule({
  declarations: [
    ClienteCrearComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    ClientePerfilComponent,
    ClienteMascotasComponent
    // ...otros componentes
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ClienteModule { }
