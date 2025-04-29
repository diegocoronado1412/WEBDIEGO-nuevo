import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8090/api'; // Ajusta si tu backend usa otro puerto o ruta

  constructor(private http: HttpClient) {}

  getVeterinarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/veterinarios`);
  }

  getMascotas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/mascotas`);
  }

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/clientes`);
  }
}
