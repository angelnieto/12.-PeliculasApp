import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
    `]
})
export class NavbarComponent{

    title:string;

  constructor(private router:Router) { }

  buscar(busqueda:NgForm) {
    this.router.navigate([ 'buscar', this.title ]);
  }

}
