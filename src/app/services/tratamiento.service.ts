import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tratamiento } from '../models/tratamiento.model';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota.model';
import { Droga } from '../models/droga.model';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  private apiUrl = 'http://localhost:8090/api/tratamientos';

  constructor(private http: HttpClient) { }

  crearTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    const tratamientoCorregido = {
      droga: tratamiento.droga,
      mascota: { id: tratamiento.mascota as unknown as number },  // ENVÍA UN OBJETO {id}
      veterinario: { id: tratamiento.veterinario as unknown as number } // ENVÍA UN OBJETO {id}
    };
    return this.http.post<Tratamiento>(this.apiUrl, tratamientoCorregido);
  }

  obtenerTratamientos(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(this.apiUrl);
  }

  obtenerTratamientosPorMascota(idMascota: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`${this.apiUrl}/mascota/${idMascota}`);
  }
  obtenerDrogas(): Observable<Droga[]> {
    return this.http.get<Droga[]>('http://localhost:8090/api/drogas');
  }
  
  obtenerMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/api/mascotas');
  }
  
}
