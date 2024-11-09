import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  register() {
    // Verificación de que todos los campos estén llenos
    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Verificación de que las contraseñas coincidan
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Aquí podrías agregar lógica para registrar al usuario
    // Después de completar el registro, redirigir a la página de inicio
    this.router.navigate(['/home']);
  }
}
