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
  floorPlans: { imgSrc: string }[] = [
    { imgSrc: '/assets/floor-plan.svg' },
    { imgSrc: '/assets/floor-plan1.svg' },
    { imgSrc: '/assets/floor-plan.svg' },
    { imgSrc: '/assets/floor-plan1.svg' },
    { imgSrc: '/assets/floor-plan.svg' },
    { imgSrc: '/assets/floor-plan1.svg' },
    { imgSrc: '/assets/floor-plan.svg' },
    { imgSrc: '/assets/floor-plan1.svg' },
    { imgSrc: '/assets/floor-plan.svg' },
  ];

  specifications = [
    {
      imageSrc: '/assets/structure-spec.svg',
      title: 'STRUCTURE',
      content:
        'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
    },
    {
      imageSrc: '/assets/door-spec.svg',
      title: 'JOINERIES DOORS',
      content:
        'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
    },
    {
      imageSrc: '/assets/window-spec.svg',
      title: 'JOINERIES WINDOWS',
      content:
        'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
    },
    {
      imageSrc: '/assets/elevator-spec.svg',
      title: 'ELEVATOR',
      content:
        'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
    },
    {
      imageSrc: '/assets/painting-spec.svg',
      title: 'PAINTING',
      content:
        'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
    },
    {
      imageSrc: '/assets/flooring-spec.svg',
      title: 'FLOORING',
      content:
        'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
    },
    {
      imageSrc: '/assets/plumbing-spec.svg',
      title: 'PLUMBING',
      content: 'CPVC concealed water line',
    },
    {
      imageSrc: '/assets/watersupply-spec.svg',
      title: 'WATER SUPPLY',
      content:
        'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
    },
    {
      imageSrc: '/assets/security-spec.svg',
      title: 'SECURITY',
      content:
        '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
    },
    {
      imageSrc: '/assets/terrace-spec.svg',
      title: 'TERRACE',
      content:
        'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
    },
    {
      imageSrc: '/assets/electrical-spec.svg',
      title: 'ELECTRICAL',
      content:
        'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
    },
    {
      imageSrc: '/assets/floorfinish-spec.svg',
      title: 'FLOOR FINISHES',
      content:
        'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
    },
  ];

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
