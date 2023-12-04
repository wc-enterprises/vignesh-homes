import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-jointventure',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './jointventure.component.html',
  styleUrl: './jointventure.component.css',
})
export class JointventureComponent {}
