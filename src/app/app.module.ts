import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
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
import { RouterModule } from '@angular/router';
import { ProjectService } from './common-utils/project-service';
import { ComingSoonCardComponent } from './coming-soon-card/coming-soon-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompletedCardComponent } from './completed-card/completed-card.component';

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
    ComingSoonCardComponent,
    CompletedCardComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      // Restore the last scroll position
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      // Enable scrolling to anchors
      anchorScrolling: 'enabled',
    }),
  ],

  providers: [ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
