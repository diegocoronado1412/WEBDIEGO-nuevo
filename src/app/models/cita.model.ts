import { Cliente } from './cliente.model';
import { Veterinario } from './veterinario.model';


export interface Cita {
  id: number;
  cliente?: Cliente;       
  veterinario?: Veterinario; 
  fecha: string;           
  hora: string;            
}
