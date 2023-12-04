import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-testimonialcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonialcard.component.html',
  styleUrl: './testimonialcard.component.css',
})
export class TestimonialcardComponent {
  @Input() content!: string;
  @Input() address!: string;
}
