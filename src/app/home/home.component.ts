import { Component, ViewChild, ElementRef } from '@angular/core';
import gsap from 'gsap';

import { ComingSoonCardComponent } from '../coming-soon-card/coming-soon-card.component';

import {
  Project,
  ProjectOverview,
  ProjectService,
  comingSoonProjects,
  completedProjects,
  projects,
} from '../common-utils/project-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [],
})
export class HomeComponent {
  projects: Project[] = projects;
  comingSoonProjects: ComingSoonProject[] = comingSoonProjects;
  completedProjects: CompletedProject[] = completedProjects.filter(project => project.saleTag === '/assets/forsale.svg');
  constructor() {}
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
    this.projects = projects;
  }

  testimonials: any = [
    // {
    //   content:
    //     'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
    //   address: 'Mr. ARUNKUMAR, Flat No - 201,Saiakshi Gardens.',
    // },
    // {
    //   content:
    //     'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
    //   address: 'Mr. Abin, Flat No - 201,Saiakshi Gardens.',
    // },
    // {
    //   content:
    //     'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
    //   address: 'Mr. Siva, Flat No - 201,Saiakshi Gardens.',
    // },
    // {
    //   content:
    //     'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
    //   address: 'Mr. Mash, Flat No - 201,Saiakshi Gardens.',
    // },
    // {
    //   content:
    //     'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
    //   address: 'Mr. Tintu, Flat No - 201,Saiakshi Gardens.',
    // },
    // {
    //   content:
    //     'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
    //   address: 'Mr. Madhan, Flat No - 201,Saiakshi Gardens.',
    // },
    // {
    //   content:
    //     'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
    //   address: 'Mr. Romi, Flat No - 201,Saiakshi Gardens.',
    // },
    // {
    //   content:
    //     'Its been such a lovely journey to be associated with the Vignesh homes. They make it so easy to help you build your dream home The kind of personal comfort and relationship they share with their customers makes the most tedious journey of building ones home, the most joyful and happy experience.',
    //   address: 'Mr. Harish, Flat No - 201,Saiakshi Gardens.',
    // },
  ];
}
export interface Testimonial {
  content: string;
  address: string;
}
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
export interface CompletedProject {
  id: string;
  projectImage: string;
  saleTag: string;
  title: string;
  approval: string;
  unitType: string;
  totalUnit: string;
  Location: string;
  overview: ProjectOverview[];
}
