import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  private apiUrl = 'http://localhost:8090/api/contacto';  // Cambia por tu backend

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      this.http.post(this.apiUrl, formData).subscribe({
        next: () => {
          alert('Mensaje enviado con éxito');
          form.reset();
        },
        error: (err) => {
          console.error('Error al enviar mensaje', err);
          alert('Error al enviar el mensaje');
        }
      });
    } else {
      alert('Por favor completa los campos obligatorios');
    }
  }
}
