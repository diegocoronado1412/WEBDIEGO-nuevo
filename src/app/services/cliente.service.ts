import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string = 'http://localhost:8090/api/cliente';  // URL base de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/listar`);
  }

  // Obtener cliente por ID (opcional para otros componentes)
  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
  }

  // Registrar un nuevo cliente
  registrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/registrar`, cliente);
  }

  // Actualizar un cliente existente
  actualizarCliente(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.baseUrl}/actualizar/${id}`, cliente);
  }

  // Eliminar un cliente por ID
  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }
}
