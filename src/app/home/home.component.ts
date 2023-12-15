import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { ComingSoonCardComponent } from '../coming-soon-card/coming-soon-card.component';

import {
  Project,
  ProjectService,
  comingSoonProjects,
  projects,
} from '../common-utils/project-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [],
})
export class HomeComponent {
  // comingSoonProjects: ComingSoonProject[] = [
  //   {
  //     id: '001',
  //     projectImage: '/assets/comingsoon-img.svg',
  //     saleTag: '/assets/comingsoon.svg',
  //     title: 'Premium 2 & 1 BHK flats for sale in Valasaravakkam, Chennai.',
  //     approval: 'CMDA Approved',
  //     foundation: 'Pile Foundation',
  //     structure: 'Stilt + 3 Floor',
  //     salableArea: '-',
  //     unitType: '2 & 1 BHK',
  //     totalUnit: '6',
  //     projectHighlight: 'Lift, Video Door, CCTV & EV Charging Point.',
  //   },
  //   // Add more projects as needed
  // ];
  projects: Project[] = projects;
  comingSoonProjects: ComingSoonProject[] = comingSoonProjects;
  constructor() {}

  ngOnInit() {
    this.projects = projects;
  }
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

  // projects: Project[] = [
  //   {
  //     id: '1',
  //     projectImage: '/assets/project1.svg',
  //     saleTag: '/assets/forsale.svg',
  //     projectTitle: 'GOTETY RESIDENCY',
  //     projectSubtitle:
  //       'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
  //   },
  //   {
  //     id: '2',
  //     projectImage: '/assets/project1.svg',
  //     saleTag: '/assets/forsale.svg',
  //     projectTitle: 'GOTETY RESIDENCY',
  //     projectSubtitle:
  //       'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
  //   },
  //   {
  //     id: '3',
  //     projectImage: '/assets/project1.svg',
  //     saleTag: '/assets/ongoing.svg',
  //     projectTitle: 'GOTETY RESIDENCY',
  //     projectSubtitle:
  //       'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
  //   },
  //   {
  //     id: '4',
  //     projectImage: '/assets/project1.svg',
  //     saleTag: '/assets/complete.svg',
  //     projectTitle: 'GOTETY RESIDENCY',
  //     projectSubtitle:
  //       'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
  //   },
  //   {
  //     id: '5',
  //     projectImage: '/assets/project1.svg',
  //     saleTag: '/assets/complete.svg',
  //     projectTitle: 'GOTETY RESIDENCY',
  //     projectSubtitle:
  //       'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
  //   },
  //   {
  //     id: '6',
  //     projectImage: '/assets/project1.svg',
  //     saleTag: '/assets/complete.svg',
  //     projectTitle: 'GOTETY RESIDENCY',
  //     projectSubtitle:
  //       'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
  //   },
  //   {
  //     id: '7',
  //     projectImage: '/assets/project1.svg',
  //     saleTag: '/assets/complete.svg',
  //     projectTitle: 'GOTETY RESIDENCY',
  //     projectSubtitle:
  //       'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
  //   },
  //   {
  //     id: '8',
  //     projectImage: '/assets/project1.svg',
  //     saleTag: '/assets/complete.svg',
  //     projectTitle: 'GOTETY RESIDENCY',
  //     projectSubtitle:
  //       'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
  //   },

  //   // Add other projects
  // ];
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
