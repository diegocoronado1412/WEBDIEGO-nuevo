import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from '../models/tratamiento.model';

@Injectable({ providedIn: 'root' })
export class TratamientoService {
  private apiUrl = 'http://localhost:8090/api/tratamientos';

  constructor(private http: HttpClient) {}

  /**
   * Crea un tratamiento. Backend devuelve 200 OK sin cuerpo.
   * Con responseType:'text' Angular no falla al parsear.
   */
  crearTratamiento(payload: {
    fecha: string;
    droga: number;
    mascota: { id: number };
    veterinario: { id: number };
  }): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<void>(
      this.apiUrl,
      payload,
      { headers, responseType: 'text' as 'json' }
    );
  }

  obtenerTratamientos(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(this.apiUrl);
  }
}
