export interface CarritoItem {
  id?: number;
  producto?: {
    nombre: string;
    precio: number;
  };
  cantidad?: number;
}
