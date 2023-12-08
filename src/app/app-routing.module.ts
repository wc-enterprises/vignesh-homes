import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { JointventureComponent } from './jointventure/jointventure.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { ProjectoverviewComponent } from './projectoverview/projectoverview.component';
import { ProjectsecComponent } from './projectsec/projectsec.component';
import { TestimonialcardComponent } from './testimonialcard/testimonialcard.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}