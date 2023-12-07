import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsecComponent } from '../projectsec/projectsec.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  sidenavWidth: number = 0;

  // openNav() {
  //   this.sidenavWidth = 250;
  // }
  openNav() {
    this.sidenavWidth = 250;
    console.log('Side nav opened. sidenavWidth:', this.sidenavWidth);
  }

  closeNav() {
    this.sidenavWidth = 0;
  }

  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
