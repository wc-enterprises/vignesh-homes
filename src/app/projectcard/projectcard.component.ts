import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export interface Project {
  id: string;
  projectImage: string;
  saleTag: string;
  projectTitle: string;
  projectSubtitle: string;
}
@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css'],
})
export class ProjectcardComponent {
  @Input() projectImage: string = '';
  @Input() saleTag: string = '';
  @Input() projectTitle: string = '';
  @Input() projectSubtitle: string = '';
  @Input() projectData!: Project;

  @Input()
  project!: Project; // Add Input decorator to receive project data

  constructor(private router: Router) {}

  navigateToProjectOverview() {
    if (this.project) {
      // Navigate to the projectoverview route with the project ID as a parameter
      this.router.navigate(['/overview', this.project.id]);
    }
  }
}
