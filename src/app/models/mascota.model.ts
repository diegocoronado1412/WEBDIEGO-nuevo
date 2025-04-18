
import { Cliente } from './cliente.model';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  antecedentes?: string;
  visitas?: string;
  citas?: string;
  servicios?: string;
  estatus?: string;  
  foto?: string;
  activo: boolean;
  cliente: Cliente;
}
