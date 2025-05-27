// src/app/services/auth.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RegisterPayload {
  cedula: string;
  nombre: string;
  correo: string;
  rol: 'cliente' | 'veterinario';
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8090/api/auth';

  constructor(private http: HttpClient) { }

  /** Inicia sesión */
  login(cedula: string, password: string): Observable<any> {
    const body = { cedula, password };
    return this.http.post(
      `${this.apiUrl}/login`,
      body,
      { withCredentials: true }
    );
  }

  /** Registra un nuevo usuario */
  register(payload: RegisterPayload): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/register`,
      payload
    );
  }

  /** Obtiene datos del usuario actualmente autenticado */
  getUsuarioActual(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/usuario-actual`,
      { withCredentials: true }
    );
  }

  /** Cierra la sesión */
  logout(): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/logout`,
      {},
      { withCredentials: true }
    );
  }

  /** Ejemplo de método adicional */
  getNombreUsuario(): string {
    // Podrías extraerlo de un token o de localStorage
    return localStorage.getItem('userName') || '';
  }
}
