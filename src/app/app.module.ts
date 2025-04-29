import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { DashboardClienteComponent } from './pages/dashboard-cliente/dashboard-cliente.component';
import { DashboardVeterinarioComponent } from './pages/dashboard-veterinario/dashboard-veterinario.component';
import { VeterinarioClienteComponent } from './pages/veterinario-cliente/veterinario-cliente.component';
import { VeterinarioMascotasComponent } from './pages/veterinario-mascotas/veterinario-mascotas.component';
import { VeterinarioTratamientosComponent } from './pages/veterinario-tratamientos/veterinario-tratamientos.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardClienteComponent,
    DashboardVeterinarioComponent,
    VeterinarioClienteComponent,
    VeterinarioMascotasComponent,
    VeterinarioTratamientosComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    MascotasModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
