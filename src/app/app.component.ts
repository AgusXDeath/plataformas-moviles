import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Remeras', url: '/remeras', icon: 'shirt' },
    { title: 'Buzos', url: '/buzos', icon: 'shirt' },
    { title: 'Zapatillas', url: '/zapatillas', icon: 'footsteps' },
    { title: 'Camperas', url: '/camperas', icon: 'shirt' },
    { title: 'iniciar sesion', url: '/iniciar', icon: 'person-add' },
    { title: 'registrarse', url: '/registrarse', icon: 'log-in' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
