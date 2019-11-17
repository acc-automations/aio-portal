import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealPerformanceComponent } from './deal-performance.component';

describe('DealPerformanceComponent', () => {
  let component: DealPerformanceComponent;
  let fixture: ComponentFixture<DealPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
