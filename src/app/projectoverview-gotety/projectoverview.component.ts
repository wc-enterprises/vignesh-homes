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
  completedProjects,
} from '../common-utils/project-service';
import * as L from 'leaflet';

@Component({
  selector: 'gotety-projectoverview',
  templateUrl: './gotety-projectoverview.component.html',
  styleUrls: ['./gotety-projectoverview.component.css'],
})

/**
 * Had to go for separate components for Ashiyana and Gotety since the images were of different aspect ratio.
 * The right aspect ratio is 0.82. Get all future images at 0.82
 */
export class GotetyDetailsComponent implements OnInit, AfterViewInit {
  projects: CompletedProject[] = completedProjects;
  project!: CompletedProject;

  ngOnInit() {
    console.log('ng on it');
    // Find the project with the matching ID from your projects array
    this.project = this.projects.find((project: CompletedProject) => {
      console.log(project, 'hhh');
      if (project.id == '821c152f7b4238060f') return true;
      return false;
    }) as unknown as CompletedProject;
    console.log('821c152f7b4238060f', this.project);
  }

  constructor() {
    console.log('hekko');
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
