import { Administrador } from "./administrador.model";
import { Tratamiento } from "./tratamiento.model";

export interface Veterinario {
  id: number;
  cedula: string;      
  nombre: string;
  correo: string;        
  celular: string;
  especialidad?: string;
  fotoUrl?: string;
  numeroAtenciones: number;
  contrasena: string;
  rol: string;
  administrador?: Administrador; 
  tratamientos?: Tratamiento[]; 
}
