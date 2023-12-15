import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonCardComponent } from './coming-soon-card.component';

describe('ComingSoonCardComponent', () => {
  let component: ComingSoonCardComponent;
  let fixture: ComponentFixture<ComingSoonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingSoonCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComingSoonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
