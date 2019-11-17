import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipDashboardComponent } from './leadership-dashboard.component';

describe('LeadershipDashboardComponent', () => {
  let component: LeadershipDashboardComponent;
  let fixture: ComponentFixture<LeadershipDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
