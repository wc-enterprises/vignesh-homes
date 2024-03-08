import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  CompletedProject,
  Project,
  completedProjects,
} from '../common-utils/project-service';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-projectoverview',
  templateUrl: './projectoverview.component.html',
  styleUrls: ['./projectoverview.component.css'],
})
export class ProjectoverviewComponent implements OnInit, AfterViewInit {
  projects: CompletedProject[] = completedProjects;
  project!: CompletedProject;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the project ID from the route parameters
    const projectId = this.route.snapshot.paramMap.get('id');

    // Find the project with the matching ID from your projects array
    this.project = this.projects.find(
      (project: CompletedProject) => project.id == projectId
    ) as unknown as CompletedProject;
    console.log(projectId, this.project);
  }

  @ViewChild('map') mapContainer!: ElementRef;

  ngAfterViewInit() {
    this.initializeMap();
  }

  initializeMap() {
    if (
      this.project &&
      this.project.overview &&
      this.project.overview.length > 0
    ) {
      const location = this.project.overview[0].location;
      if (location && location.mapCoordinates) {
        const { latitude, longitude } = location.mapCoordinates;

        if (this.mapContainer) {
          const map = L.map(this.mapContainer.nativeElement).setView(
            [latitude, longitude],
            15
          );

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
          }).addTo(map);

          const marker = L.marker([latitude, longitude]).addTo(map);

          // Function to create a custom popup with address and "Get Directions" button
          const createPopup = () => {
            const popupContent = `
              <p>${location.address}</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}" target="_blank">Get Directions</a>
            `;
            return popupContent;
          };
          // Set up a mouseover event on the marker to show the custom popup
          marker.on('mouseover', () => {
            marker.bindPopup(createPopup()).openPopup();
          });
          // Set up a click event on the marker to open the custom popup
          marker.on('click', () => {
            marker.bindPopup(createPopup()).openPopup();
          });
        } else {
          console.error('Map container is not defined.');
        }
      }
    }
  }

  @ViewChild('floorplanContainer') floorplanContainer: ElementRef | undefined;

  @ViewChild('locationSection') locationSection: ElementRef | undefined;
  @ViewChild('floorplanSection') floorplanSection: ElementRef | undefined;
  @ViewChild('specificationSection') specificationSection:
    | ElementRef
    | undefined;
  selectedTab: string = '';
  scrollToLocation() {
    if (this.locationSection) {
      this.locationSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    this.selectedTab = 'location';
  }

  scrollToFloorplan() {
    if (this.floorplanSection) {
      this.floorplanSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
    this.selectedTab = 'floorplan';
  }

  scrollToSpecification() {
    if (this.specificationSection) {
      this.specificationSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
    this.selectedTab = 'specification';
  }
}
interface FloorPlan {
  imgSrc: string;
}
