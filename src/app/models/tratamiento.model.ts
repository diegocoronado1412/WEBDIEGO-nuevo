import { Droga } from './droga.model';
import { Mascota } from './mascota.model';
import { Veterinario } from './veterinario.model';

export interface Tratamiento {
  id: number;
  fecha: string;           
  droga?: Droga;          
  mascota?: Mascota;       
  veterinario?: Veterinario;
}
