import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaltoolComponent } from './internaltool.component';

describe('InternaltoolComponent', () => {
  let component: InternaltoolComponent;
  let fixture: ComponentFixture<InternaltoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternaltoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternaltoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
