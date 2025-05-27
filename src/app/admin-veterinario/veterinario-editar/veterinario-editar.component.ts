import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeterinarioService, Veterinario } from 'src/app/services/veterinario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';   // 👈 Importar Location

@Component({
  selector: 'app-veterinario-editar',
  templateUrl: './veterinario-editar.component.html',
  styleUrls: ['./veterinario-editar.component.css']
})
export class VeterinarioEditarComponent implements OnInit {

  veterinarioForm!: FormGroup;
  cedula!: string;
  veterinarioOriginal!: Veterinario;

  constructor(
    private veterinarioService: VeterinarioService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location   // 👈 Inyectar Location
  ) {}

  ngOnInit(): void {
    const cedulaParam = this.route.snapshot.paramMap.get('cedula');
    if (!cedulaParam) {
      alert('Cédula no proporcionada');
      this.router.navigate(['/admin-veterinario']);
      return;
    }

    this.cedula = cedulaParam;

    this.veterinarioForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cedula: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      fotoUrl: [''],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['veterinario'],
      numeroAtenciones: [0]
    });

    this.veterinarioService.obtenerPorCedula(this.cedula).subscribe({
      next: (veterinario: Veterinario) => {
        if (!veterinario) {
          alert('Veterinario no encontrado');
          this.router.navigate(['/admin-veterinario']);
          return;
        }

        this.veterinarioOriginal = veterinario;

        this.veterinarioForm.patchValue({
          nombre: veterinario.nombre,
          cedula: veterinario.cedula,
          especialidad: veterinario.especialidad || '',
          fotoUrl: veterinario.fotoUrl || '',
          contrasena: veterinario.contrasena || '',
          rol: veterinario.rol || 'veterinario',
          numeroAtenciones: veterinario.numeroAtenciones || 0
        });
      },
      error: (error: any) => {
        console.error('Error cargando veterinario', error);
        alert('No se pudo cargar el veterinario');
        this.router.navigate(['/admin-veterinario']);
      }
    });
  }

  actualizarVeterinario(): void {
    if (this.veterinarioForm.valid) {
      const veterinarioActualizado: Veterinario = {
        ...this.veterinarioOriginal,
        ...this.veterinarioForm.value
      };

      console.log('🔄 Enviando al backend:', veterinarioActualizado);

      this.veterinarioService.actualizarPorCedula(this.cedula, veterinarioActualizado).subscribe({
        next: () => {
          alert('Veterinario actualizado correctamente');
          this.router.navigate(['/admin-veterinario']);
        },
        error: (error: any) => {
          console.error('Error actualizando veterinario', error);
          alert('Error al actualizar el veterinario');
        }
      });
    } else {
      alert('Por favor complete todos los campos correctamente.');
    }
  }

  goBack(): void {
    this.location.back();   // 👈 Método para volver atrás
  }
}
