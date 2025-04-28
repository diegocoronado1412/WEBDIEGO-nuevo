import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Droga } from '../models/droga.model'; // Asegúrate de tener el modelo Droga
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  private baseUrl: string = 'http://localhost:8090/api/droga';

  constructor(private http: HttpClient) { }

  // 1. Obtener todas las drogas
  getAllDrogas(): Observable<Droga[]> {
    return this.http.get<Droga[]>(`${this.baseUrl}/listar`);
  }

  // 2. Obtener una droga por ID
  getDroga(id: number): Observable<Droga> {
    return this.http.get<Droga>(`${this.baseUrl}/detalle/${id}`);
  }

  // 3. Crear una nueva droga
  createDroga(droga: Droga): Observable<Droga> {
    return this.http.post<Droga>(`${this.baseUrl}/crear`, droga);
  }

  // 4. Actualizar una droga
  updateDroga(id: number, droga: Droga): Observable<Droga> {
    return this.http.put<Droga>(`${this.baseUrl}/actualizar/${id}`, droga);
  }

  // 5. Eliminar una droga
  deleteDroga(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/eliminar/${id}`);
  }
}
