import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClienteComponent } from './pages/dashboard-cliente/dashboard-cliente.component';
import { DashboardVeterinarioComponent } from './pages/dashboard-veterinario/dashboard-veterinario.component';
import { VeterinarioMascotasComponent } from './pages/veterinario-mascotas/veterinario-mascotas.component';
import { VeterinarioClienteComponent } from './pages/veterinario-cliente/veterinario-cliente.component';
import { VeterinarioTratamientosComponent } from './pages/veterinario-tratamientos/veterinario-tratamientos.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) },
  { path: 'mascotas', loadChildren: () => import('./mascotas/mascotas.module').then(m => m.MascotasModule) },
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'dashboard-cliente', component: DashboardClienteComponent },
  { path: 'dashboard-veterinario', component: DashboardVeterinarioComponent },
  { path: 'veterinario-cliente', component: VeterinarioClienteComponent },
  { path: 'veterinario-mascotas', component: VeterinarioMascotasComponent },
  { path: 'veterinario-tratamientos', component: VeterinarioTratamientosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
