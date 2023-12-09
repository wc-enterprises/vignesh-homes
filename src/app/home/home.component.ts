import { Component, ViewChild, ElementRef } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [],
})
export class HomeComponent {
  @ViewChild('heroHeadline', { static: true }) heroHeadline!: ElementRef;
  @ViewChild('heroSubHeadline', { static: true }) heroSubHeadline!: ElementRef;
  @ViewChild('heroDescription', { static: true }) heroDescription!: ElementRef;

  animateHeroText() {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(this.heroHeadline.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1.3,
      ease: 'power3.inOut',
    });
    tl.from(this.heroSubHeadline.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.heroDescription.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power4.out',
    });
    return tl;
  }

  ngOnInit() {
    this.animateHeroText().play();
  }

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
}
export interface Testimonial {
  content: string;
  address: string;
}
