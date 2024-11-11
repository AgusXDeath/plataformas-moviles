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
    
    if (this.email && this.password) {
     
      this.router.navigate(['/home']);
    } else {
      alert('Por favor ingresa un correo y una contraseña válidos');
    }
  }
}