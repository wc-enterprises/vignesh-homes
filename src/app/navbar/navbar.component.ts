import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // sidenavWidth: number = 0;
  // viewportScroller: any;
  // openNav(): void {
  //   this.sidenavWidth = 250; // Set the width when opening the side nav
  // }
  // closeNav(): void {
  //   this.sidenavWidth = 0; // Set the width to 0 when closing the side nav
  // }
}
