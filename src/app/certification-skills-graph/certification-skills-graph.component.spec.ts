import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationSkillsGraphComponent } from './certification-skills-graph.component';

describe('CertificationSkillsGraphComponent', () => {
  let component: CertificationSkillsGraphComponent;
  let fixture: ComponentFixture<CertificationSkillsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationSkillsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationSkillsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
