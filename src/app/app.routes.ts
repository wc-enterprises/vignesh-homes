import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JointventureComponent } from './jointventure/jointventure.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TestimonialcardComponent } from './testimonialcard/testimonialcard.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { ProjectoverviewComponent } from './projectoverview/projectoverview.component';
import { ProjectsecComponent } from './projectsec/projectsec.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { CompletedComponent } from './completed/completed.component';
import { ForsaleComponent } from './forsale/forsale.component';
import { OngoingComponent } from './ongoing/ongoing.component';
export const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'jointventure', component: JointventureComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },

  { path: 'overview', component: ProjectoverviewComponent },
  { path: 'projectsec', component: ProjectsecComponent },

  { path: 'projectcard', component: ProjectcardComponent },
  { path: 'tmcard', component: TestimonialcardComponent },
  { path: 'comingsoon', component: ComingsoonComponent },
  { path: 'forsale', component: ForsaleComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'ongoing', component: OngoingComponent },
];
