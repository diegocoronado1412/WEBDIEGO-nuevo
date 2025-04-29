import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Veterinario {
  id: number;
  nombre: string;
  cedula: string;
  correo: string;
  celular: string;
  // Agrega otros campos según tu modelo
}

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {
  private apiUrl = 'http://localhost:8090/api/veterinarios';

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Veterinario> {
    return this.http.get<Veterinario>(`${this.apiUrl}/${id}`);
  }

  crear(veterinario: Veterinario): Observable<Veterinario> {
    return this.http.post<Veterinario>(this.apiUrl, veterinario);
  }

  actualizar(id: number, veterinario: Veterinario): Observable<Veterinario> {
    return this.http.put<Veterinario>(`${this.apiUrl}/${id}`, veterinario);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
