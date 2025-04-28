import { Droga } from './droga.model';
import { Mascota } from './mascota.model';
import { Veterinario } from './veterinario.model';

export interface Tratamiento {
  id?: number;         // ← Opcional porque Spring lo genera
  fecha?: string;      // ← Opcional porque el backend la pone
  droga: Droga | number;  // ← Acepta Droga (cuando cargas) o solo número (cuando envías)
  mascota: Mascota | number;  // ← Igual
  veterinario: Veterinario;
}
