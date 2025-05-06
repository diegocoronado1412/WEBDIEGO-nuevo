import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8090/api';

  constructor(private http: HttpClient) {}

  // ✔ Corregido: Veterinarios (ruta backend: /api/veterinario)
  getVeterinarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/veterinario`);
  }

  // ✔ Corregido: Mascotas (ruta backend: /api/mascota/listar)
  getMascotas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/mascota/listar`);
  }

  // ✔ Corregido: Clientes (ruta backend: /api/cliente/listar)
  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/cliente/listar`);
  }

  // ✔ Tratamientos ya funcionaba correctamente
  getTratamientos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tratamientos`);
  }
}
