import { Droga } from './droga.model';
import { Mascota } from './mascota.model';
import { Veterinario } from './veterinario.model';

export interface Tratamiento {
  /** Lo genera Spring */
  id?: number;
  /** Lo pone Spring */
  fecha?: string;

  /** Al leer viene Droga, al enviar usamos sólo el id */
  droga: Droga | number;

  /** Igual que droga */
  mascota: Mascota | number;

  /** Ahora puede venir undefined */
  veterinario?: Veterinario;
}
