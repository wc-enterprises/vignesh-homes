import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsecComponent } from '../projectsec/projectsec.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-ongoing',
  standalone: true,
  imports: [
    AboutusComponent,
    RouterModule,
    HomeComponent,
    ContactComponent,
    ProjectsecComponent,
  ],
  templateUrl: './ongoing.component.html',
  styleUrl: './ongoing.component.css',
})
export class OngoingComponent {
  sidenavWidth: number = 0;

  openNav() {
    this.sidenavWidth = 250;
  }

  closeNav() {
    this.sidenavWidth = 0;
  }
}
