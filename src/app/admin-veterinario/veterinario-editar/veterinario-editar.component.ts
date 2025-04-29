import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService, Veterinario } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-veterinario-editar',
  templateUrl: './veterinario-editar.component.html',
  styleUrls: ['./veterinario-editar.component.css']
})
export class VeterinarioEditarComponent implements OnInit {
  veterinario: Veterinario = {
    id: 0,
    nombre: '',
    cedula: '',
    correo: '',
    celular: ''
    // Inicializa otros campos según tu modelo
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veterinarioService: VeterinarioService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.veterinarioService.obtenerPorId(id).subscribe({
      next: (data) => this.veterinario = data,
      error: (err) => console.error('Error al obtener veterinario:', err)
    });
  }

  actualizarVeterinario(): void {
    this.veterinarioService.actualizar(this.veterinario.id, this.veterinario).subscribe({
      next: () => this.router.navigate(['/admin-veterinario']),
      error: (err) => console.error('Error al actualizar veterinario:', err)
    });
  }
}
