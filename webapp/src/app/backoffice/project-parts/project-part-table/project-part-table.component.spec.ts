import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPartTableComponent } from './project-part-table.component';

describe('ProjectPartTableComponent', () => {
  let component: ProjectPartTableComponent;
  let fixture: ComponentFixture<ProjectPartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPartTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
