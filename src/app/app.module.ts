import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollColorChange } from './common-utils/background-color-change-on-scroll.directive';
import { ScrollChangeColorDirective } from './scroll-change-color.directive';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    JointventureComponent,
    NavbarComponent,
    ProjectcardComponent,
    ProjectoverviewComponent,
    ProjectsecComponent,
    TestimonialcardComponent,
    ScrollColorChange,
    ScrollChangeColorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
