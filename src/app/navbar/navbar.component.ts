import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styles: [`
  .navbar-nav mr-auto{
    text-align: center;
  }
  `]
})
export class NavbarComponent {

  constructor(  ) { }
}

