import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPartComponent } from './project-part.component';

describe('ProjectPartComponent', () => {
  let component: ProjectPartComponent;
  let fixture: ComponentFixture<ProjectPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
