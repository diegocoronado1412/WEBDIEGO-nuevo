import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactoComponent,
    LandingComponent,
    ServiciosComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule
  ],
  exports: [
   NavbarComponent,
  FooterComponent
     ]
})
export class CoreModule { }
