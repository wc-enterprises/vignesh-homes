import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

interface FloorPlan {
  imgSrc: string;
}
@Component({
  selector: 'app-projectoverview',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './projectoverview.component.html',
  styleUrl: './projectoverview.component.css',
})
export class ProjectoverviewComponent {
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
  ];
}
