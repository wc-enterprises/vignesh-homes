import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  standalone: true,
  imports: [],
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.css',
})
export class ProjectcardComponent {
  @Input() projectImage: string = '';
  @Input() saleTag: string = '';
  @Input() projectTitle: string = '';
  @Input() projectSubtitle: string = '';

  // constructor(private router: Router) {}

  // navigateToProjectSec() {
  //   this.router.navigate(['/projectsec']);
  // }
}
