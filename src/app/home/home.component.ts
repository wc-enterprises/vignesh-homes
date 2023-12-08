import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialcardComponent } from '../testimonialcard/testimonialcard.component';
import { ProjectcardComponent } from '../projectcard/projectcard.component';
import { RouterModule } from '@angular/router';
import { ProjectsecComponent } from '../projectsec/projectsec.component';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    TestimonialcardComponent,
    ProjectcardComponent,
    RouterModule,
    ProjectsecComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cardData = {
    image: '/assets/comingsoon-img.svg',
    title: 'Premium 2 & 1 BHK flats for sale in Valasaravakkam, Chennai.',
    approval: 'CMDA Approved',
    foundation: 'Pile Foundation',
    structure: 'Stilt + 3 Floor',
    salableArea: '-',
    unitType: '2 & 1 BHK',
    totalUnit: '6',
    projectHighlight: 'Lift, Video Door, CCTV & EV Charging Point.',
  };

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
  router: any;

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

  navigateToProjectSec() {
    this.router.navigate(['/projectsec']);
  }
}
export interface Testimonial {
  content: string;
  address: string;
}
