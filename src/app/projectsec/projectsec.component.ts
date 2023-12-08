import { Component, NgModule, ɵpublishDefaultGlobalUtils } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectcardComponent } from '../projectcard/projectcard.component';
import { CommonModule } from '@angular/common';
import { ComingsoonComponent } from '../comingsoon/comingsoon.component';
import { CompletedComponent } from '../completed/completed.component';
import { ForsaleComponent } from '../forsale/forsale.component';
import { OngoingComponent } from '../ongoing/ongoing.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

import { JointventureComponent } from '../jointventure/jointventure.component';
@Component({
  selector: 'app-projectsec',
  standalone: true,

  imports: [
    RouterModule,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ProjectcardComponent,
    CommonModule,
    ComingsoonComponent,
    ForsaleComponent,
    OngoingComponent,
    CompletedComponent,
    JointventureComponent,
  ],
  templateUrl: './projectsec.component.html',
  styleUrl: './projectsec.component.css',
})
export class ProjectsecComponent {
  // selectedTab: string = 'forsale'; // Set the default tab

  // forSaleContent = {
  //   heading: 'FOR SALE',
  //   description:
  //     'Explore our properties available for sale. Find your dream home today!',
  // };

  // ongoingContent = {
  //   heading: 'ONGOING PROJECTS',
  //   description:
  //     'Discover our ongoing projects and be a part of something extraordinary.',
  // };

  // completedContent = {
  //   heading: 'COMPLETED PROJECTS',
  //   description:
  //     'Browse through our successfully completed projects. Your satisfaction is our achievement.',
  // };

  // comingSoonContent = {
  //   heading: 'COMING SOON',
  //   description:
  //     'Exciting projects are on the horizon. Stay tuned for our upcoming releases!',
  // };

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
      saleTag: '/assets/forsale.svg',
      projectTitle: 'GOTETY RESIDENCY',
      projectSubtitle:
        'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
    },
    {
      projectImage: '/assets/project3.svg',
      saleTag: '/assets/forsale.svg',
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
      saleTag: '/assets/forsale.svg',
      projectTitle: 'GOTETY RESIDENCY',
      projectSubtitle:
        'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
    },
    {
      projectImage: '/assets/project3.svg',
      saleTag: '/assets/ongoing.svg',
      projectTitle: 'GOTETY RESIDENCY',
      projectSubtitle:
        'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',
    },
  ];
  router: any;
  route: any;

  // filterProjects(tab: string): void {
  //   this.selectedTab = tab;
  // }

  // getContent() {
  //   switch (this.selectedTab) {
  //     case 'forsale':
  //       return this.forSaleContent;
  //     case 'ongoing':
  //       return this.ongoingContent;
  //     case 'complete':
  //       return this.completedContent;
  //     case 'Coming soon':
  //       return this.comingSoonContent;
  //     default:
  //       return { heading: '', description: '' }; // default content
  //   }
  // }
}
