import { Component } from '@angular/core';
import {
  ComingSoonProject,
  CompletedProject,
  completedProjects,
} from '../common-utils/project-service';
import { comingSoonProjects } from '../common-utils/project-service';
import { ProjectService } from '../common-utils/project-service';

@Component({
  selector: 'app-projectsec',
  templateUrl: './projectsec.component.html',
  styleUrls: ['./projectsec.component.css'],
})
export class ProjectsecComponent {
  sectionTitle = '';
  sectionDescription = '';
  // standardProjects: Project[] = [];
  comingSoonProjects: ComingSoonProject[] = [];
  completedProjects: CompletedProject[] = completedProjects;
  defaultTab: string = 'forsale';

  constructor(private ProjectService: ProjectService) {}

  ngOnInit(): void {
    this.filterProjects('complete');
    this.ProjectService.selectedTab$.subscribe((tab) => {
      this.filterProjects(tab);
    });
  }

  updateTab(tab: string) {
    this.ProjectService.updateSelectedTab(tab);
    this.defaultTab = tab;
  }

  filterProjects(saleTag: string) {
    switch (saleTag) {
      case 'forsale':
        this.sectionTitle = 'FOR SALE PROJECTS';
        this.sectionDescription =
          "Vignesh Homes is pleased to offer a selection of meticulously crafted properties for sale. These are not just buildings; they're future homes and investments. Explore our range of residential and commercial properties, each designed with a focus on quality and aesthetics. Secure your place in a Vignesh Homes creation, where dreams become addresses. Take the first step in owning a piece of architectural excellence.";
        this.completedProjects = completedProjects.filter(
          (project) => project.saleTag === '/assets/forsale.svg'
        );
        this.comingSoonProjects = [];

        break;

      case 'complete':
        this.sectionTitle = 'COMPLETED PROJECTS';
        this.sectionDescription =
          'Discover our completed projects that reflect the epitome of quality and craftsmanship. Each completed project is a testament to our commitment to delivering excellence. Explore these residences that stand as a symbol of enduring satisfaction and joy.';
        this.completedProjects = completedProjects.filter(
          (project) => project.saleTag === '/assets/complete.svg'
        );
        // this.standardProjects = [];
        this.comingSoonProjects = [];
        break;

      case 'comingsoon':
        this.sectionTitle = 'COMING SOON PROJECTS';
        this.sectionDescription =
          'Anticipate our upcoming projects that promise a blend of luxury, innovation, and modern living. Get ready to embark on a new chapter of elegance and sophistication. Stay tuned for more details on these exciting ventures.';
        this.comingSoonProjects = comingSoonProjects;
        // this.standardProjects = [];
        this.completedProjects = [];
        break;
      default:
        break;
    }
  }
}
