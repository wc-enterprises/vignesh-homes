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
  location: string;
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

export const comingSoonProjects: ComingSoonProject[] = [
  {
    id: '01',
    projectImage: '/assets/coming-soon.jpg',
    saleTag: '/assets/comingsoon.svg',
    title: 'Coming Soon',
    approval: 'CMDA Approved',
    foundation: 'Shallow foundation',
    structure: 'Stilt + 3 Floor',
    salableArea: '873-1265 sqft',
    unitType: '2 & 3 BHK',
    totalUnit: '6',
    projectHighlight: 'CCTV,Covered car parking,Lift',
    location: 'Plot No.25, Thirumalai Nagar,  Valasaravakkam, Chennai -600087',
  },
];

export const completedProjects: CompletedProject[] = [
  {
    id: '00001',
    projectImage: '/assets/Ashiyana.jpg',
    saleTag: '/assets/forsale.svg',
    title: 'Ashiyana',
    approval: 'CMDA Approved',

    unitType: '2 & 3 BHK',
    totalUnit: '6',
    Location: 'Appar Street, Valasaravakkam',
    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/comingsoon-img.jpg',
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
    id: '00002',
    projectImage: '/assets/Gotety.jpg',
    saleTag: '/assets/forsale.svg',
    title: 'GOTETY Residency',
    approval: 'CMDA Approved',
    unitType: '2 & 3 BHK',
    totalUnit: '8',
    Location: 'Appar Street, Valasaravakkam',
    overview: [
      {
        introduction: {
          title: 'GOTETY RESIDENCY',
          imageSrc: '/assets/comingsoon-img.jpg',
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
    id: '0001',
    projectImage: '/assets/Emerald_Park.jpg',
    saleTag: '/assets/complete.svg',
    title: 'Emerald Park',
    approval: 'CMDA Approved',
    unitType: '2 & 3 BHK',
    totalUnit: '1',
    Location: 'Kamakshi Nagar, Valasaravakkam',
    overview: [],
  },
  {
    id: '0002',
    projectImage: '/assets/Guru_Nivas.jpg',
    saleTag: '/assets/complete.svg',
    title: 'Guru Nivas',
    approval: 'CMDA Approved',
    unitType: '2 & 3 BHK',
    totalUnit: '1',
    Location: 'Chinna Porur, porur',
    overview: [],
  },
  {
    id: '0003',
    projectImage: '/assets/Karthick_Flats.jpg',
    saleTag: '/assets/complete.svg',
    title: 'Karthick Flats',
    approval: 'CMDA Approved',

    unitType: '2 & 3 BHK',
    totalUnit: '1',
    Location: 'Appar Street, Valasaravakkam',
    overview: [],
  },
  {
    id: '0004',
    projectImage: '/assets/Sai_Akshi_Gardens.jpg',
    saleTag: '/assets/complete.svg',
    title: 'Sai Akshi Gardens',
    approval: 'CMDA Approved',

    unitType: '2 & 3 BHK',
    totalUnit: '1',
    Location: 'Jagathguru street, Valasaravakkam',
    overview: [],
  },
  {
    id: '0005',
    projectImage: '/assets/SK-Villa.jpg',
    saleTag: '/assets/complete.svg',
    title: 'Sk Villa',
    approval: 'CMDA Approved',

    unitType: '2 & 3 BHK',
    totalUnit: '1',
    Location: 'Virugambakkam, Chennai',
    overview: [],
  },
  {
    id: '0006',
    projectImage: '/assets/SK_Amber-A-Block.jpg',
    saleTag: '/assets/complete.svg',
    title: 'SK Amber(A Block)',
    approval: 'CMDA Approved',

    unitType: 'Individual Villa',
    totalUnit: '1',
    Location: 'Chowdry Nagar, Valasaravakkam',
    overview: [],
  },
  {
    id: '0007',
    projectImage: '/assets/SK_Amber-B-Block.jpg',
    saleTag: '/assets/complete.svg',
    title: 'SK Amber(B Block)',
    approval: 'CMDA Approved',

    unitType: 'Individual Villa',
    totalUnit: '1',
    Location: 'Chowdry nagar, valasaravakkam',
    overview: [],
  },
  {
    id: '0008',
    projectImage: '/assets/SK_Amber-C-Block.jpg',
    saleTag: '/assets/complete.svg',
    title: 'SK Amber(C Block)',
    approval: 'CMDA Approved',

    unitType: '3 BHK',
    totalUnit: '1',
    Location: 'Chowdry Nagar, Valasaravakkam',
    overview: [],
  },
  {
    id: '0009',
    projectImage: '/assets/Sk_Anna_Nagar_House.jpg',
    saleTag: '/assets/complete.svg',
    title: 'Sk Anna Nagar House',
    approval: 'CMDA Approved',

    unitType: '2 & 3 BHK',
    totalUnit: '1',
    Location: 'Anna Nagar, ChennaI',
    overview: [],
  },
  {
    id: '0010',
    projectImage: '/assets/SK_Brindhavan.jpg',
    saleTag: '/assets/complete.svg',
    title: 'SK Brindhavan',
    approval: 'CMDA Approved',

    unitType: '3 BHK',
    totalUnit: '1',
    Location: 'Sundar Street, Valasaravakkam',
    overview: [],
  },
  {
    id: '0011',
    projectImage: '/assets/Sk_Garden.jpg',
    saleTag: '/assets/complete.svg',
    title: 'Sk Garden',
    approval: 'CMDA Approved',

    unitType: '2 & 3 BHK',
    totalUnit: '1',
    Location: 'Astalakshmi Nagar, valasaravakkam',
    overview: [],
  },
  {
    id: '0012',
    projectImage: '/assets/Sk_Parkland.jpg',
    saleTag: '/assets/complete.svg',
    title: 'Sk Park land',
    approval: 'CMDA Approved',

    unitType: '2 & 3 BHK',
    totalUnit: '1',
    Location: 'Astalakshmi Nagar, valasaravakkam',
    overview: [],
  },
  {
    id: '0013',
    projectImage: '/assets/SK_Villa-2.jpg',
    saleTag: '/assets/complete.svg',
    title: 'SK Villa',
    approval: 'CMDA Approved',

    unitType: '2 BHK',
    totalUnit: '1',
    Location: 'Thiruvarur',
    overview: [],
  },
  {
    id: '0014',
    projectImage: '/assets/Sk_Villa.jpg',
    saleTag: '/assets/complete.svg',
    title: 'SK Villa',
    approval: 'CMDA Approved',

    unitType: '2 BHK',
    totalUnit: '1',
    Location: 'Thiruvarur',
    overview: [],
  },
  {
    id: '0015',
    projectImage: '/assets/Srinivas.jpg',
    saleTag: '/assets/complete.svg',
    title: 'Srinivas',
    approval: 'CMDA Approved',

    unitType: '2 & 3 BHK',
    totalUnit: '1',
    Location: 'Astalakshmi Nagar, valasaravakkam',
    overview: [],
  },
  {
    id: '0016',
    projectImage: '/assets/West_mambalam_House.jpg',
    saleTag: '/assets/complete.svg',
    title: 'West mambalam House',
    approval: 'CMDA Approved',

    unitType: '2 & 3 BHK',
    totalUnit: '1',
    Location: 'T.Nagar, West mambalam',
    overview: [],
  },
];
