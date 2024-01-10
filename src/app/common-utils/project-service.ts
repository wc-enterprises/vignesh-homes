// project.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Project {
  id: string;
  projectImage: string;
  saleTag: string;
  projectTitle: string;
  projectSubtitle: string;
  overview: ProjectOverview[];
}

export interface ProjectOverview {
  introduction: ProjectIntroduction;
  location: ProjectLocation;
  floorPlan: FloorPlan;
  specification: Specification;
}

export interface ProjectIntroduction {
  title: string;
  imageSrc: string;
  content: string;
}

export interface ProjectLocation {
  head: string;
  address: string;
  locationContent: string[];
  mapCoordinates: { latitude: number; longitude: number };
}

export interface FloorPlan {
  title: string;
  plans: { imgSrc: string }[];
}

export interface Specification {
  head: string;
  grid: { title: string; content: string }[];
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
  projectHighlight: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private selectedTabSource = new BehaviorSubject<string>('forsale');
  selectedTab$ = this.selectedTabSource.asObservable();

  updateSelectedTab(tab: string) {
    this.selectedTabSource.next(tab);
  }
}
export const projects: Project[] = [
  {
    id: '001',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/forsale.svg',
    projectTitle: 'GOTETY RESIDENCY',
    projectSubtitle:
      'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',

    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/project-image.jpg',
          content:
            'Usually, land owners opt for joint venture property development if they have a vacant plot that they want to develop, if the property is being divided amongst siblings or if the owner is looking to renovate the existing flat/apartment, where the FSI (Floor Space Index) is revised.',
        },
        location: {
          head: 'LOCATION',
          address:
            'No. 3/7, OHM Eswarar Street, Thirumalai Nagar, Ramapuram, Chennai - 600089.',
          locationContent: [
            'Imagine a popular residential site, yearning patiently for decades, profoundly evolve into something grander and attain higher ranking honours. Thats precisely what has materialised with the pioneering intervention of Brand Baashyaam.',
            'This sizeable, noteworthy property right on Thirumalai nagar, Ramapuram is an integral part of an exemplar neighbourhood. It now finally gets the long overdue attention and fitting tribute that it richly deserves.',
          ],
          mapCoordinates: { latitude: 13.035396, longitude: 80.1815671 },
        },
        floorPlan: {
          title: 'FLOOR PLAN',
          plans: [
            { imgSrc: '/assets/floorplan.svg' },
            { imgSrc: '/assets/floorplan1.svg' },
          ],
        },
        specification: {
          head: 'SPECIFICATION',
          grid: [
            {
              title: 'STRUCTURE',
              content:
                'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
            },
            {
              title: 'JOINERIES DOORS',
              content:
                'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
            },
            {
              title: 'JOINERIES WINDOWS',
              content:
                'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
            },
            {
              title: 'ELEVATOR',
              content:
                'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
            },
            {
              title: 'PAINTING',
              content:
                'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
            },
            {
              title: 'FLOORING',
              content:
                'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
            },
            { title: 'PLUMBING', content: 'CPVC concealed water line' },
            {
              title: 'WATER SUPPLY',
              content:
                'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
            },
            {
              title: 'SECURITY',
              content:
                '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
            },
            {
              title: 'TERRACE',
              content:
                'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
            },
            {
              title: 'ELECTRICAL',
              content:
                'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
            },
            {
              title: 'FLOOR FINISHES',
              content:
                'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
            },
          ],
        },
      },
    ],
  },
  {
    id: '002',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/forsale.svg',
    projectTitle: 'GOTETY RESIDENCY',
    projectSubtitle:
      'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',

    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/project-image.jpg',
          content:
            'Usually, land owners opt for joint venture property development if they have a vacant plot that they want to develop, if the property is being divided amongst siblings or if the owner is looking to renovate the existing flat/apartment, where the FSI (Floor Space Index) is revised.',
        },
        location: {
          head: 'LOCATION',
          address:
            'No. 3/7, OHM Eswarar Street, Thirumalai Nagar, Ramapuram, Chennai - 600089.',
          locationContent: [
            'Imagine a popular residential site, yearning patiently for decades, profoundly evolve into something grander and attain higher ranking honours. Thats precisely what has materialised with the pioneering intervention of Brand Baashyaam.',
            'This sizeable, noteworthy property right on Thirumalai nagar, Ramapuram is an integral part of an exemplar neighbourhood. It now finally gets the long overdue attention and fitting tribute that it richly deserves.',
          ],
          mapCoordinates: { latitude: 13.035396, longitude: 80.1815671 },
        },
        floorPlan: {
          title: 'FLOOR PLAN',
          plans: [
            { imgSrc: '/assets/floorplan.svg' },
            { imgSrc: '/assets/floorplan1.svg' },
          ],
        },
        specification: {
          head: 'SPECIFICATION',
          grid: [
            {
              title: 'STRUCTURE',
              content:
                'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
            },
            {
              title: 'JOINERIES DOORS',
              content:
                'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
            },
            {
              title: 'JOINERIES WINDOWS',
              content:
                'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
            },
            {
              title: 'ELEVATOR',
              content:
                'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
            },
            {
              title: 'PAINTING',
              content:
                'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
            },
            {
              title: 'FLOORING',
              content:
                'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
            },
            { title: 'PLUMBING', content: 'CPVC concealed water line' },
            {
              title: 'WATER SUPPLY',
              content:
                'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
            },
            {
              title: 'SECURITY',
              content:
                '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
            },
            {
              title: 'TERRACE',
              content:
                'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
            },
            {
              title: 'ELECTRICAL',
              content:
                'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
            },
            {
              title: 'FLOOR FINISHES',
              content:
                'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
            },
          ],
        },
      },
    ],
  },
  {
    id: '003',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/forsale.svg',
    projectTitle: 'GOTETY RESIDENCY',
    projectSubtitle:
      'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',

    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/project-image.jpg',
          content:
            'Usually, land owners opt for joint venture property development if they have a vacant plot that they want to develop, if the property is being divided amongst siblings or if the owner is looking to renovate the existing flat/apartment, where the FSI (Floor Space Index) is revised.',
        },
        location: {
          head: 'LOCATION',
          address:
            'No. 3/7, OHM Eswarar Street, Thirumalai Nagar, Ramapuram, Chennai - 600089.',
          locationContent: [
            'Imagine a popular residential site, yearning patiently for decades, profoundly evolve into something grander and attain higher ranking honours. Thats precisely what has materialised with the pioneering intervention of Brand Baashyaam.',
            'This sizeable, noteworthy property right on Thirumalai nagar, Ramapuram is an integral part of an exemplar neighbourhood. It now finally gets the long overdue attention and fitting tribute that it richly deserves.',
          ],
          mapCoordinates: { latitude: 13.035396, longitude: 80.1815671 },
        },
        floorPlan: {
          title: 'FLOOR PLAN',
          plans: [
            { imgSrc: '/assets/floorplan.svg' },
            { imgSrc: '/assets/floorplan1.svg' },
          ],
        },
        specification: {
          head: 'SPECIFICATION',
          grid: [
            {
              title: 'STRUCTURE',
              content:
                'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
            },
            {
              title: 'JOINERIES DOORS',
              content:
                'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
            },
            {
              title: 'JOINERIES WINDOWS',
              content:
                'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
            },
            {
              title: 'ELEVATOR',
              content:
                'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
            },
            {
              title: 'PAINTING',
              content:
                'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
            },
            {
              title: 'FLOORING',
              content:
                'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
            },
            { title: 'PLUMBING', content: 'CPVC concealed water line' },
            {
              title: 'WATER SUPPLY',
              content:
                'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
            },
            {
              title: 'SECURITY',
              content:
                '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
            },
            {
              title: 'TERRACE',
              content:
                'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
            },
            {
              title: 'ELECTRICAL',
              content:
                'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
            },
            {
              title: 'FLOOR FINISHES',
              content:
                'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
            },
          ],
        },
      },
    ],
  },
  {
    id: '004',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/forsale.svg',
    projectTitle: 'GOTETY RESIDENCY',
    projectSubtitle:
      'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',

    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/project-image.jpg',
          content:
            'Usually, land owners opt for joint venture property development if they have a vacant plot that they want to develop, if the property is being divided amongst siblings or if the owner is looking to renovate the existing flat/apartment, where the FSI (Floor Space Index) is revised.',
        },
        location: {
          head: 'LOCATION',
          address:
            'No. 3/7, OHM Eswarar Street, Thirumalai Nagar, Ramapuram, Chennai - 600089.',
          locationContent: [
            'Imagine a popular residential site, yearning patiently for decades, profoundly evolve into something grander and attain higher ranking honours. Thats precisely what has materialised with the pioneering intervention of Brand Baashyaam.',
            'This sizeable, noteworthy property right on Thirumalai nagar, Ramapuram is an integral part of an exemplar neighbourhood. It now finally gets the long overdue attention and fitting tribute that it richly deserves.',
          ],
          mapCoordinates: { latitude: 13.035396, longitude: 80.1815671 },
        },
        floorPlan: {
          title: 'FLOOR PLAN',
          plans: [
            { imgSrc: '/assets/floorplan.svg' },
            { imgSrc: '/assets/floorplan1.svg' },
          ],
        },
        specification: {
          head: 'SPECIFICATION',
          grid: [
            {
              title: 'STRUCTURE',
              content:
                'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
            },
            {
              title: 'JOINERIES DOORS',
              content:
                'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
            },
            {
              title: 'JOINERIES WINDOWS',
              content:
                'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
            },
            {
              title: 'ELEVATOR',
              content:
                'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
            },
            {
              title: 'PAINTING',
              content:
                'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
            },
            {
              title: 'FLOORING',
              content:
                'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
            },
            { title: 'PLUMBING', content: 'CPVC concealed water line' },
            {
              title: 'WATER SUPPLY',
              content:
                'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
            },
            {
              title: 'SECURITY',
              content:
                '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
            },
            {
              title: 'TERRACE',
              content:
                'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
            },
            {
              title: 'ELECTRICAL',
              content:
                'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
            },
            {
              title: 'FLOOR FINISHES',
              content:
                'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
            },
          ],
        },
      },
    ],
  },
  {
    id: '005',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/forsale.svg',
    projectTitle: 'GOTETY RESIDENCY',
    projectSubtitle:
      'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',

    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/project-image.jpg',
          content:
            'Usually, land owners opt for joint venture property development if they have a vacant plot that they want to develop, if the property is being divided amongst siblings or if the owner is looking to renovate the existing flat/apartment, where the FSI (Floor Space Index) is revised.',
        },
        location: {
          head: 'LOCATION',
          address:
            'No. 3/7, OHM Eswarar Street, Thirumalai Nagar, Ramapuram, Chennai - 600089.',
          locationContent: [
            'Imagine a popular residential site, yearning patiently for decades, profoundly evolve into something grander and attain higher ranking honours. Thats precisely what has materialised with the pioneering intervention of Brand Baashyaam.',
            'This sizeable, noteworthy property right on Thirumalai nagar, Ramapuram is an integral part of an exemplar neighbourhood. It now finally gets the long overdue attention and fitting tribute that it richly deserves.',
          ],
          mapCoordinates: { latitude: 13.035396, longitude: 80.1815671 },
        },
        floorPlan: {
          title: 'FLOOR PLAN',
          plans: [
            { imgSrc: '/assets/floorplan.svg' },
            { imgSrc: '/assets/floorplan1.svg' },
          ],
        },
        specification: {
          head: 'SPECIFICATION',
          grid: [
            {
              title: 'STRUCTURE',
              content:
                'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
            },
            {
              title: 'JOINERIES DOORS',
              content:
                'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
            },
            {
              title: 'JOINERIES WINDOWS',
              content:
                'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
            },
            {
              title: 'ELEVATOR',
              content:
                'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
            },
            {
              title: 'PAINTING',
              content:
                'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
            },
            {
              title: 'FLOORING',
              content:
                'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
            },
            { title: 'PLUMBING', content: 'CPVC concealed water line' },
            {
              title: 'WATER SUPPLY',
              content:
                'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
            },
            {
              title: 'SECURITY',
              content:
                '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
            },
            {
              title: 'TERRACE',
              content:
                'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
            },
            {
              title: 'ELECTRICAL',
              content:
                'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
            },
            {
              title: 'FLOOR FINISHES',
              content:
                'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
            },
          ],
        },
      },
    ],
  },
  {
    id: '006',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/forsale.svg',
    projectTitle: 'GOTETY RESIDENCY',
    projectSubtitle:
      'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',

    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/project-image.jpg',
          content:
            'Usually, land owners opt for joint venture property development if they have a vacant plot that they want to develop, if the property is being divided amongst siblings or if the owner is looking to renovate the existing flat/apartment, where the FSI (Floor Space Index) is revised.',
        },
        location: {
          head: 'LOCATION',
          address:
            'No. 3/7, OHM Eswarar Street, Thirumalai Nagar, Ramapuram, Chennai - 600089.',
          locationContent: [
            'Imagine a popular residential site, yearning patiently for decades, profoundly evolve into something grander and attain higher ranking honours. Thats precisely what has materialised with the pioneering intervention of Brand Baashyaam.',
            'This sizeable, noteworthy property right on Thirumalai nagar, Ramapuram is an integral part of an exemplar neighbourhood. It now finally gets the long overdue attention and fitting tribute that it richly deserves.',
          ],
          mapCoordinates: { latitude: 13.035396, longitude: 80.1815671 },
        },
        floorPlan: {
          title: 'FLOOR PLAN',
          plans: [
            { imgSrc: '/assets/floorplan.svg' },
            { imgSrc: '/assets/floorplan1.svg' },
          ],
        },
        specification: {
          head: 'SPECIFICATION',
          grid: [
            {
              title: 'STRUCTURE',
              content:
                'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
            },
            {
              title: 'JOINERIES DOORS',
              content:
                'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
            },
            {
              title: 'JOINERIES WINDOWS',
              content:
                'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
            },
            {
              title: 'ELEVATOR',
              content:
                'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
            },
            {
              title: 'PAINTING',
              content:
                'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
            },
            {
              title: 'FLOORING',
              content:
                'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
            },
            { title: 'PLUMBING', content: 'CPVC concealed water line' },
            {
              title: 'WATER SUPPLY',
              content:
                'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
            },
            {
              title: 'SECURITY',
              content:
                '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
            },
            {
              title: 'TERRACE',
              content:
                'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
            },
            {
              title: 'ELECTRICAL',
              content:
                'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
            },
            {
              title: 'FLOOR FINISHES',
              content:
                'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
            },
          ],
        },
      },
    ],
  },
  {
    id: '007',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/forsale.svg',
    projectTitle: 'GOTETY RESIDENCY',
    projectSubtitle:
      'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',

    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/project-image.jpg',
          content:
            'Usually, land owners opt for joint venture property development if they have a vacant plot that they want to develop, if the property is being divided amongst siblings or if the owner is looking to renovate the existing flat/apartment, where the FSI (Floor Space Index) is revised.',
        },
        location: {
          head: 'LOCATION',
          address:
            'No. 3/7, OHM Eswarar Street, Thirumalai Nagar, Ramapuram, Chennai - 600089.',
          locationContent: [
            'Imagine a popular residential site, yearning patiently for decades, profoundly evolve into something grander and attain higher ranking honours. Thats precisely what has materialised with the pioneering intervention of Brand Baashyaam.',
            'This sizeable, noteworthy property right on Thirumalai nagar, Ramapuram is an integral part of an exemplar neighbourhood. It now finally gets the long overdue attention and fitting tribute that it richly deserves.',
          ],
          mapCoordinates: { latitude: 13.035396, longitude: 80.1815671 },
        },
        floorPlan: {
          title: 'FLOOR PLAN',
          plans: [
            { imgSrc: '/assets/floorplan.svg' },
            { imgSrc: '/assets/floorplan1.svg' },
          ],
        },
        specification: {
          head: 'SPECIFICATION',
          grid: [
            {
              title: 'STRUCTURE',
              content:
                'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
            },
            {
              title: 'JOINERIES DOORS',
              content:
                'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
            },
            {
              title: 'JOINERIES WINDOWS',
              content:
                'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
            },
            {
              title: 'ELEVATOR',
              content:
                'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
            },
            {
              title: 'PAINTING',
              content:
                'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
            },
            {
              title: 'FLOORING',
              content:
                'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
            },
            { title: 'PLUMBING', content: 'CPVC concealed water line' },
            {
              title: 'WATER SUPPLY',
              content:
                'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
            },
            {
              title: 'SECURITY',
              content:
                '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
            },
            {
              title: 'TERRACE',
              content:
                'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
            },
            {
              title: 'ELECTRICAL',
              content:
                'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
            },
            {
              title: 'FLOOR FINISHES',
              content:
                'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
            },
          ],
        },
      },
    ],
  },
  {
    id: '008',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/forsale.svg',
    projectTitle: 'GOTETY RESIDENCY',
    projectSubtitle:
      'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',

    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/project-image.jpg',
          content:
            'Usually, land owners opt for joint venture property development if they have a vacant plot that they want to develop, if the property is being divided amongst siblings or if the owner is looking to renovate the existing flat/apartment, where the FSI (Floor Space Index) is revised.',
        },
        location: {
          head: 'LOCATION',
          address:
            'No. 3/7, OHM Eswarar Street, Thirumalai Nagar, Ramapuram, Chennai - 600089.',
          locationContent: [
            'Imagine a popular residential site, yearning patiently for decades, profoundly evolve into something grander and attain higher ranking honours. Thats precisely what has materialised with the pioneering intervention of Brand Baashyaam.',
            'This sizeable, noteworthy property right on Thirumalai nagar, Ramapuram is an integral part of an exemplar neighbourhood. It now finally gets the long overdue attention and fitting tribute that it richly deserves.',
          ],
          mapCoordinates: { latitude: 13.035396, longitude: 80.1815671 },
        },
        floorPlan: {
          title: 'FLOOR PLAN',
          plans: [
            { imgSrc: '/assets/floorplan.svg' },
            { imgSrc: '/assets/floorplan1.svg' },
          ],
        },
        specification: {
          head: 'SPECIFICATION',
          grid: [
            {
              title: 'STRUCTURE',
              content:
                'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
            },
            {
              title: 'JOINERIES DOORS',
              content:
                'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
            },
            {
              title: 'JOINERIES WINDOWS',
              content:
                'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
            },
            {
              title: 'ELEVATOR',
              content:
                'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
            },
            {
              title: 'PAINTING',
              content:
                'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
            },
            {
              title: 'FLOORING',
              content:
                'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
            },
            { title: 'PLUMBING', content: 'CPVC concealed water line' },
            {
              title: 'WATER SUPPLY',
              content:
                'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
            },
            {
              title: 'SECURITY',
              content:
                '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
            },
            {
              title: 'TERRACE',
              content:
                'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
            },
            {
              title: 'ELECTRICAL',
              content:
                'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
            },
            {
              title: 'FLOOR FINISHES',
              content:
                'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
            },
          ],
        },
      },
    ],
  },
  {
    id: '009',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/forsale.svg',
    projectTitle: 'GOTETY RESIDENCY',
    projectSubtitle:
      'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',

    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/project-image.jpg',
          content:
            'Usually, land owners opt for joint venture property development if they have a vacant plot that they want to develop, if the property is being divided amongst siblings or if the owner is looking to renovate the existing flat/apartment, where the FSI (Floor Space Index) is revised.',
        },
        location: {
          head: 'LOCATION',
          address:
            'No. 3/7, OHM Eswarar Street, Thirumalai Nagar, Ramapuram, Chennai - 600089.',
          locationContent: [
            'Imagine a popular residential site, yearning patiently for decades, profoundly evolve into something grander and attain higher ranking honours. Thats precisely what has materialised with the pioneering intervention of Brand Baashyaam.',
            'This sizeable, noteworthy property right on Thirumalai nagar, Ramapuram is an integral part of an exemplar neighbourhood. It now finally gets the long overdue attention and fitting tribute that it richly deserves.',
          ],
          mapCoordinates: { latitude: 13.035396, longitude: 80.1815671 },
        },
        floorPlan: {
          title: 'FLOOR PLAN',
          plans: [
            { imgSrc: '/assets/floorplan.svg' },
            { imgSrc: '/assets/floorplan1.svg' },
          ],
        },
        specification: {
          head: 'SPECIFICATION',
          grid: [
            {
              title: 'STRUCTURE',
              content:
                'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
            },
            {
              title: 'JOINERIES DOORS',
              content:
                'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
            },
            {
              title: 'JOINERIES WINDOWS',
              content:
                'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
            },
            {
              title: 'ELEVATOR',
              content:
                'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
            },
            {
              title: 'PAINTING',
              content:
                'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
            },
            {
              title: 'FLOORING',
              content:
                'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
            },
            { title: 'PLUMBING', content: 'CPVC concealed water line' },
            {
              title: 'WATER SUPPLY',
              content:
                'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
            },
            {
              title: 'SECURITY',
              content:
                '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
            },
            {
              title: 'TERRACE',
              content:
                'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
            },
            {
              title: 'ELECTRICAL',
              content:
                'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
            },
            {
              title: 'FLOOR FINISHES',
              content:
                'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
            },
          ],
        },
      },
    ],
  },
  {
    id: '010',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/forsale.svg',
    projectTitle: 'GOTETY RESIDENCY',
    projectSubtitle:
      'Introducing 2 and 3 BHK flats, ranging from 969 to 1080 sqft, for your ideal living space.',

    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/project-image.jpg',
          content:
            'Usually, land owners opt for joint venture property development if they have a vacant plot that they want to develop, if the property is being divided amongst siblings or if the owner is looking to renovate the existing flat/apartment, where the FSI (Floor Space Index) is revised.',
        },
        location: {
          head: 'LOCATION',
          address:
            'No. 3/7, OHM Eswarar Street, Thirumalai Nagar, Ramapuram, Chennai - 600089.',
          locationContent: [
            'Imagine a popular residential site, yearning patiently for decades, profoundly evolve into something grander and attain higher ranking honours. Thats precisely what has materialised with the pioneering intervention of Brand Baashyaam.',
            'This sizeable, noteworthy property right on Thirumalai nagar, Ramapuram is an integral part of an exemplar neighbourhood. It now finally gets the long overdue attention and fitting tribute that it richly deserves.',
          ],
          mapCoordinates: { latitude: 13.035396, longitude: 80.1815671 },
        },
        floorPlan: {
          title: 'FLOOR PLAN',
          plans: [
            { imgSrc: '/assets/floorplan.svg' },
            { imgSrc: '/assets/floorplan1.svg' },
          ],
        },
        specification: {
          head: 'SPECIFICATION',
          grid: [
            {
              title: 'STRUCTURE',
              content:
                'Seismic zone III compliant RCC framed structure. Walls will be of AAC blocks',
            },
            {
              title: 'JOINERIES DOORS',
              content:
                'Doors, Frames Are Made Of 1st Quality Teak Wood With ornamental borders & Shutters Are Wooden Door Pu Varnish Finish With Croft Architectural Anti Brass Fittings',
            },
            {
              title: 'JOINERIES WINDOWS',
              content:
                'Upvc Framed Windows Catchment Type Saint Gobain Glass And Grill Provision As Per The Architect Design.',
            },
            {
              title: 'ELEVATOR',
              content:
                'Fully Automatic V3f Lift - Six Passenger With SS Finish, Elegant Fall Ceiling and Energy Efficient Light Fixtures.    ',
            },
            {
              title: 'PAINTING',
              content:
                'Interior Walls – Two Coats Of JK Wall Care Putty (Or) Asian Wall Putty With Primer One Coats With Two Coats Of Asian Paints Premium Emulsion For Inner Walls.    ',
            },
            {
              title: 'FLOORING',
              content:
                'Living & Dinning Carpet Area Should Be In 24” x 24” Vitrified Tiles Of Somany/ Kajaria/ RAK Or Equal Brands, Bathroom floor Tiles Anti – skid & Wall tiles will be roof height of Somany/ Kajaria/ RAK Or Equal Brands, Entrance Lobby & Staircase with Granite',
            },
            { title: 'PLUMBING', content: 'CPVC concealed water line' },
            {
              title: 'WATER SUPPLY',
              content:
                'One Borewell Of Adequate Depth & Rcc Sump Of 10000 L Capacity for Metro Water & OHT with Booster Pump.',
            },
            {
              title: 'SECURITY',
              content:
                '24/7 Cctv Surveillance Cameras Control System Provision For The Apartments.',
            },
            {
              title: 'TERRACE',
              content:
                'Provision With A Proper Weathering Course Provided With Cooling Tile. Seating Provision As Per Design.    ',
            },
            {
              title: 'ELECTRICAL',
              content:
                'EB Main 3 Phase Supply With Insulated Copper Conductors Concealed Wiring And Modular Switches Of ELLEYS Brands.',
            },
            {
              title: 'FLOOR FINISHES',
              content:
                'Living & Dining - Vitrified tiles, Bedrooms - Vitrified tiles, Kitchen - Anti-skid tiles, Lobby - Indian granite, Stairs - Kota stone',
            },
          ],
        },
      },
    ],
  },

  // Add other projects
];
export const comingSoonProjects: ComingSoonProject[] = [
  {
    id: '01',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/comingsoon.svg',
    title: 'Premium 2 & 1 BHK flats for sale in Valasaravakkam, Chennai.',
    approval: 'CMDA Approved',
    foundation: 'Pile Foundation',
    structure: 'Stilt + 3 Floor',
    salableArea: '-',
    unitType: '2 & 1 BHK',
    totalUnit: '6',
    projectHighlight: 'Lift, Video Door, CCTV & EV Charging Point.',
  },
];
export const completedProjects: CompletedProject[] = [
  {
    id: '0001',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/complete.svg',
    title: 'GOTETY RESIDENCY',
    approval: 'CMDA Approved',

    unitType: '2 & 1 BHK',
    totalUnit: '6',
    projectHighlight: 'Lift, Video Door, CCTV & EV Charging Point.',
  },
  {
    id: '0002',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/complete.svg',
    title: 'GOTETY RESIDENCY',
    approval: 'CMDA Approved',

    unitType: '2 & 1 BHK',
    totalUnit: '6',
    projectHighlight: 'Lift, Video Door, CCTV & EV Charging Point.',
  },
  {
    id: '0003',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/complete.svg',
    title: 'GOTETY RESIDENCY',
    approval: 'CMDA Approved',

    unitType: '2 & 1 BHK',
    totalUnit: '6',
    projectHighlight: 'Lift, Video Door, CCTV & EV Charging Point.',
  },
  {
    id: '0004',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/complete.svg',
    title: 'GOTETY RESIDENCY',
    approval: 'CMDA Approved',

    unitType: '2 & 1 BHK',
    totalUnit: '6',
    projectHighlight: 'Lift, Video Door, CCTV & EV Charging Point.',
  },
  {
    id: '0005',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/complete.svg',
    title: 'GOTETY RESIDENCY',
    approval: 'CMDA Approved',

    unitType: '2 & 1 BHK',
    totalUnit: '6',
    projectHighlight: 'Lift, Video Door, CCTV & EV Charging Point.',
  },
  {
    id: '0006',
    projectImage: '/assets/comingsoon-img.jpg',
    saleTag: '/assets/complete.svg',
    title: 'GOTETY RESIDENCY',
    approval: 'CMDA Approved',

    unitType: '2 & 1 BHK',
    totalUnit: '6',
    projectHighlight: 'Lift, Video Door, CCTV & EV Charging Point.',
  },
];
