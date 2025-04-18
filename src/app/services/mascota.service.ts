import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MascotaService {

  private baseUrl: string = "http://localhost:8090/api/mascota";

  constructor(private http: HttpClient) { }

  // 1. Obtener todas las mascotas
  getAllMascotas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }

  // 2. Obtener mascota por ID
  getMascota(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/detalle/${id}`);
  }

  // 3. Obtener mascotas por cédula del cliente
  getMascotasByCliente(cedula: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/obtenerMascotasPorCliente/${cedula}`);
  }

  // 4. Crear una nueva mascota
  createMascota(mascota: any, clienteCedula: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/crear?clienteCedula=${clienteCedula}`, mascota);
  }

  // 5. Actualizar una mascota
  updateMascota(id: number, mascota: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizar/${id}`, mascota);
  }

  // 6. Eliminar mascota
  deleteMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/eliminar/${id}`);
  }
  
}
