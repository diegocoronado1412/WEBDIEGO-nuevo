// src/app/services/cita.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  /**
   * Stub: devuelve array vacío.
   * En producción, haz:
   * return this.http.get<Cita[]>('http://localhost:8090/api/citas');
   */
  obtenerTodas(): Observable<Cita[]> {
    return of([]);
  }
}
