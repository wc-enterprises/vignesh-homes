import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  sidenavWidth: number = 0;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private router: Router) {
    // Subscribe to route changes to ensure scrolling is enabled
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.enableScroll();
      });
  }

  openNav() {
    this.sidenavWidth = 250;
    this.disableScroll();
  }

  closeNav() {
    this.sidenavWidth = 0;
    this.enableScroll();
  }

  private disableScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private enableScroll(): void {
    document.body.style.overflow = 'auto';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
