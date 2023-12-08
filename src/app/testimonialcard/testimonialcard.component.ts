import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-testimonialcard',
  templateUrl: './testimonialcard.component.html',
  styleUrls: ['./testimonialcard.component.css'],
})
export class TestimonialcardComponent {
  @Input() content!: string;
  @Input() address!: string;
}
