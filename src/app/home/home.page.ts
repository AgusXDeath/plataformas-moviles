import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() { }

  doSomething() {
    console.log('Search button clicked');
    // Aquí puedes agregar la lógica para el botón de búsqueda
  }
}