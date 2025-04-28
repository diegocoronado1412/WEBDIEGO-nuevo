import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getNombreUsuario(): string {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8090/api/auth';

  constructor(private http: HttpClient) { }

  login(cedula: string, password: string): Observable<any> {
    const body = { cedula, password };
    return this.http.post(`${this.apiUrl}/login`, body, { withCredentials: true });
  }

  getUsuarioActual(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario-actual`, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true });
  }
}
