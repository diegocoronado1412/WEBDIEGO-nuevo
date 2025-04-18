import { Cliente } from './cliente.model';

export interface Carrito {
  id: number;
  nombreProducto: string;
  precio: number;
  cantidad: number;
  cliente?: Cliente;  
}
