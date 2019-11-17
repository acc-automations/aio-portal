import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSkillGraphComponent } from './finance-skill-graph.component';

describe('FinanceSkillGraphComponent', () => {
  let component: FinanceSkillGraphComponent;
  let fixture: ComponentFixture<FinanceSkillGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceSkillGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceSkillGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
