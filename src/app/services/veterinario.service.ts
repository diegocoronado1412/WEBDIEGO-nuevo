import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Veterinario {
  id?: number;
  nombre: string;
  cedula: string;
  correo: string;
  celular: string;
  especialidad: string;   
  fotoUrl: string;  
  rol: string;    
  contrasena: string;   
  numeroAtenciones: number; 
}

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {
  private apiUrl = 'http://localhost:8090/api/veterinario';

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(this.apiUrl);
  }

  obtenerPorCedula(cedula: string): Observable<Veterinario> {
    return this.http.get<Veterinario>(`${this.apiUrl}/${cedula}`);
  }
  

  crear(veterinario: Veterinario): Observable<Veterinario> {
    return this.http.post<Veterinario>(`${this.apiUrl}/registrar`, veterinario);
  }
  
actualizarPorCedula(cedula: string, veterinario: Veterinario): Observable<Veterinario> {
  return this.http.put<Veterinario>(`${this.apiUrl}/actualizar`, veterinario);
}

  

  actualizar(id: number, veterinario: Veterinario): Observable<Veterinario> {
    return this.http.put<Veterinario>(`${this.apiUrl}/${id}`, veterinario);
  }

  eliminar(cedula: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${cedula}`);
  }
  
}
