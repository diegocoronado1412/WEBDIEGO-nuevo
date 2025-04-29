import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarritoItem } from '../models/carrito-item.model';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  /** Stub: devuelve array vacío; luego sustitúyelo por tu llamada real con HttpClient */
  obtenerItems(): Observable<CarritoItem[]> {
    return of([]);
  }
}
