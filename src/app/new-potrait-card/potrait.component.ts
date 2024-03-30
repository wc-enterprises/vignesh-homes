import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export interface ComingSoonProject {
  id: string;
  projectImage: string;
  saleTag: string;
  title: string;
  approval: string;
  foundation: string;
  structure: string;
  salableArea: string;
  unitType: string;
  totalUnit: string;
  projectHighlight: string;
}
@Component({
  selector: 'potrait-card',
  templateUrl: './potrait.component.html',
  styleUrls: ['./potrait.component.css'],
})
export class PotraitCardComponent {
  @Input() projectId: string = '';
  @Input() projectImage: string = '';
  @Input() saleTag: string = '';
  @Input() title: string = '';
  @Input() approval: string = '';
  @Input() foundation: string = '';
  @Input() structure: string = '';
  @Input() salableArea: string = '';
  @Input() unitType: string = '';
  @Input() totalUnit: string = '';
  @Input() projectHighlight: string = '';
  @Input() location: string = '';

  constructor(private router: Router) {}

  takeToProjectDetailsPage() {
    if (this.projectId === '821c152f7b4238060f') {
      this.router.navigate([`/projects/overview/gotety`]);
      return;
    }

    this.router.navigate([`/projects/overview/${this.projectId}`]);
  }
}
