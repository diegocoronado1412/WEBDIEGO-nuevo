import { Veterinario } from './veterinario.model';

export interface Administrador {
  usuario: string;         
  contrasena: string;      
  rol: string;            
  veterinarios?: Veterinario[]; 
}
