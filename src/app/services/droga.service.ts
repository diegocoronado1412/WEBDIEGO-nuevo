// src/app/services/droga.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DrogaService {

  private baseUrl: string = "http://localhost:8090/api/droga";

  constructor(private http: HttpClient) { }

  // 1. Obtener todas las drogas
  getAllDrogas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }

  // 2. Obtener una droga por ID
  getDrogaById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // 3. Crear una nueva droga
  createDroga(droga: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/crear`, droga);
  }

  // 4. Actualizar una droga existente
  updateDroga(id: number, droga: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizar/${id}`, droga);
  }

  // 5. Eliminar una droga
  deleteDroga(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/eliminar/${id}`);
  }

}
