import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  sidenavWidth: number = 0;
  viewportScroller: any;

  openNav(): void {
    this.sidenavWidth = 250;
  }

  closeNav(): void {
    this.sidenavWidth = 0;
  }
}
