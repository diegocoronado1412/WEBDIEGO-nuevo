import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Receta } from '../models/receta.model';

@Injectable({ providedIn: 'root' })
export class RecetaService {
  /** Stub: devuelve array vacío; luego sustitúyelo por tu llamada real con HttpClient */
  obtenerActivas(): Observable<Receta[]> {
    return of([]);
  }
}
