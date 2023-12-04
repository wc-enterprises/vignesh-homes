import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsecComponent } from './projectsec.component';

describe('ProjectsecComponent', () => {
  let component: ProjectsecComponent;
  let fixture: ComponentFixture<ProjectsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
