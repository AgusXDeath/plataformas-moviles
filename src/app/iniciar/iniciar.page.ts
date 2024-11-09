import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  login() {
    // Aquí puedes agregar la lógica de autenticación
    if (this.email && this.password) {
      // Redirige al usuario a la página principal después de autenticarse
      this.router.navigate(['/home']);
    } else {
      alert('Por favor ingresa un correo y una contraseña válidos');
    }
  }
}