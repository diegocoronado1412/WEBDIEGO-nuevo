import { Carrito } from "./carrito.model";
import { Cita } from "./cita.model";
import { Mascota } from "./mascota.model";


export interface Cliente {
  id: number;
  cedula: string;       
  nombre: string;
  correo: string;      
  celular: string;
  contrasena: string;
  rol: string;          
  citas?: Cita[];      
  carrito?: Carrito[]; 
  mascotas?: Mascota[];
}
