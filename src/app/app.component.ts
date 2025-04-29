import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vibraanimal-ng';
  showSidebar = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd)
      )
      .subscribe(event => {
        // Prefijos de rutas donde NO se mostrará el sidebar
        const hidePrefixes = ['/', '/servicios', '/contacto', '/auth', '/login', '/registro'];
        // Ocultar si la URL coincide o pertenece a alguno de los prefijos
        this.showSidebar = !hidePrefixes.some(prefix =>
          event.urlAfterRedirects === prefix ||
          event.urlAfterRedirects.startsWith(prefix + '/')
        );
      });
  }
}
