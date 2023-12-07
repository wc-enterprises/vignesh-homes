import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css',
})
export class CompletedComponent {
  @Input() projectImage: string = '';
  @Input() saleTag: string = '';
  @Input() projectTitle: string = '';
  @Input() projectSubtitle: string = '';
}
