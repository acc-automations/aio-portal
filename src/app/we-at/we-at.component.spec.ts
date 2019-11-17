import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAtComponent } from './we-at.component';

describe('WeAtComponent', () => {
  let component: WeAtComponent;
  let fixture: ComponentFixture<WeAtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeAtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
