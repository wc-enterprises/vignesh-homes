import { Component, NgModule, ɵpublishDefaultGlobalUtils } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectcardComponent } from '../projectcard/projectcard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectsec',
  standalone: true,

  imports: [
    NavbarComponent,
    FooterComponent,
    ProjectcardComponent,

    CommonModule,
  ],
  templateUrl: './projectsec.component.html',
  styleUrl: './projectsec.component.css',
})
export class ProjectsecComponent {
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
  filteredCards = [...this.cardsData]; // Initialize with all cards

  filterProjects(category: string) {
    this.filteredCards = this.cardsData.filter((card) =>
      card.saleTag.toLowerCase().includes(category.toLowerCase())
    );
  }
}
