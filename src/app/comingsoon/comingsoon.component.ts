import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comingsoon',
  standalone: true,
  imports: [],
  templateUrl: './comingsoon.component.html',
  styleUrl: './comingsoon.component.css',
})
export class ComingsoonComponent {
  @Input() projectImage: string = '';
  @Input() saleTag: string = '';
  @Input() projectTitle: string = '';
  @Input() projectSubtitle: string = '';
}
