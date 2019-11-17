import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBreakdownComponent } from './issue-breakdown.component';

describe('IssueBreakdownComponent', () => {
  let component: IssueBreakdownComponent;
  let fixture: ComponentFixture<IssueBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
