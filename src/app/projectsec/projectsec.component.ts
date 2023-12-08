import { Component } from '@angular/core';

@Component({
  selector: 'app-projectsec',
  templateUrl: './projectsec.component.html',
  styleUrls: ['./projectsec.component.css'],
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
