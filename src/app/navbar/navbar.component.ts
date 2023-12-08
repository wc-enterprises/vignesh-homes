import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  sidenavWidth: number = 0;
  openNav() {
    this.sidenavWidth = 250;
    console.log('Side nav opened. sidenavWidth:', this.sidenavWidth);
  }

  closeNav() {
    this.sidenavWidth = 0;
  }
}
