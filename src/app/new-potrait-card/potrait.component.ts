import { Component, Input } from '@angular/core';
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
}
