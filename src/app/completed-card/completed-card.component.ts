import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export interface CompletedProject {
  id: string;
  projectImage: string;
  saleTag: string;
  title: string;
  approval: string;
  unitType: string;
  totalUnit: string;
  projectHighlight: string;
}
@Component({
  selector: 'app-completed-card',
  templateUrl: './completed-card.component.html',
  styleUrls: ['./completed-card.component.css'],
})
export class CompletedCardComponent {
  hoverText: string = ''; // Add this line
  @Input() id!: string;
  @Input() overview: any;
  @Input() projectImage: string = '';
  @Input() saleTag: string = '';
  @Input() title: string = '';
  @Input() approval: string = '';
  @Input() unitType: string = '';
  @Input() totalUnit: string = '';
  @Input() projectHighlight: string = '';
  @Input() projectData!: CompletedProject;

  constructor(private router: Router) {}

  navigateToProjectOverview() {
    // Navigate to the projectoverview route with the project ID as a parameter
    this.router.navigate(['projects/overview', this.id]);
  }
}
