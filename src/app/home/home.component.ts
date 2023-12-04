import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialcardComponent } from '../testimonialcard/testimonialcard.component';
import { ProjectcardComponent } from '../projectcard/projectcard.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    TestimonialcardComponent,
    ProjectcardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [],
})
export class HomeComponent {
  // testimonials: Testimonial[] = [
  //   {
  //     content:
  //       "It's been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building one's home, the most joyful and happy experience.",
  //     address: 'Mr. ARUNKUMAR, Flat No - 201, Saiakshi Gardens.',
  //   },
  //   {
  //     content:
  //       "It's been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building one's home, the most joyful and happy experience.",
  //     address: 'Mr. ARUN, Flat No - 201, Saiakshi Gardens.',
  //   },
  //   {
  //     content:
  //       "It's been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building one's home, the most joyful and happy experience.",
  //     address: 'Mr. KUMAR, Flat No - 201, Saiakshi Gardens.',
  //   },
  //   {
  //     content:
  //       "It's been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building one's home, the most joyful and happy experience.",
  //     address: 'Mr. dhanush, Flat No - 201, Saiakshi Gardens.',
  //   },
  //   {
  //     content:
  //       "It's been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building one's home, the most joyful and happy experience.",
  //     address: 'Mr. siva, Flat No - 201, Saiakshi Gardens.',
  //   },
  //   {
  //     content:
  //       "It's been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building one's home, the most joyful and happy experience.",
  //     address: 'Mr. paul, Flat No - 201, Saiakshi Gardens.',
  //   },
  //   {
  //     content:
  //       "It's been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building one's home, the most joyful and happy experience.",
  //     address: 'Mr. tintu, Flat No - 201, Saiakshi Gardens.',
  //   },
  //   {
  //     content:
  //       "It's been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building one's home, the most joyful and happy experience.",
  //     address: 'Mr. mash, Flat No - 201, Saiakshi Gardens.',
  //   },
  //   {
  //     content:
  //       "It's been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building one's home, the most joyful and happy experience.",
  //     address: 'Mr. siv, Flat No - 201, Saiakshi Gardens.',
  //   },
  // ];

  testimonials = [
    {
      content:
        'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
      address: 'Mr. ARUNKUMAR, Flat No - 201,Saiakshi Gardens.',
    },
    {
      content:
        'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
      address: 'Mr. Abin, Flat No - 201,Saiakshi Gardens.',
    },
    {
      content:
        'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
      address: 'Mr. Siva, Flat No - 201,Saiakshi Gardens.',
    },
    {
      content:
        'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
      address: 'Mr. Mash, Flat No - 201,Saiakshi Gardens.',
    },
    {
      content:
        'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
      address: 'Mr. Tintu, Flat No - 201,Saiakshi Gardens.',
    },
    {
      content:
        'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
      address: 'Mr. Madhan, Flat No - 201,Saiakshi Gardens.',
    },
    {
      content:
        'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
      address: 'Mr. Romi, Flat No - 201,Saiakshi Gardens.',
    },
    {
      content:
        'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
      address: 'Mr. Harish, Flat No - 201,Saiakshi Gardens.',
    },
  ];
  @ViewChild('testimonialsContainer', { static: false })
  testimonialsContainer!: ElementRef;
  cardWidth = 350; // Adjust this based on your card width

  moveLeft(): void {
    const container = this.testimonialsContainer.nativeElement as HTMLElement;
    const scrollAmount = this.cardWidth;
    container.scrollLeft -= scrollAmount;
  }

  moveRight(): void {
    const container = this.testimonialsContainer.nativeElement as HTMLElement;
    const scrollAmount = this.cardWidth;
    container.scrollLeft += scrollAmount;
  }
  cardsData = [
    {
      projectImage: '/assets/project1.svg',
      saleTag: '/assets/forsale.svg',
      projectTitle: 'GOTETY RESIDENCY',
      projectSubtitle:
        'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
    },
    {
      projectImage: '/assets/project2.svg',
      saleTag: '/assets/ongoing.svg',
      projectTitle: 'GOTETY RESIDENCY',
      projectSubtitle:
        'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
    },
    {
      projectImage: '/assets/project3.svg',
      saleTag: '/assets/complete.svg',
      projectTitle: 'GOTETY RESIDENCY',
      projectSubtitle:
        'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
    },
  ];
}
export interface Testimonial {
  content: string;
  address: string;
}
