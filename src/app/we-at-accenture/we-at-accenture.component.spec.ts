import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAtAccentureComponent } from './we-at-accenture.component';

describe('WeAtAccentureComponent', () => {
  let component: WeAtAccentureComponent;
  let fixture: ComponentFixture<WeAtAccentureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeAtAccentureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeAtAccentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
