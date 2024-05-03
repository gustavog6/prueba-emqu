import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyLinearChartComponent } from './monthly-linear-chart.component';

describe('MonthlyLinearChartComponent', () => {
  let component: MonthlyLinearChartComponent;
  let fixture: ComponentFixture<MonthlyLinearChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyLinearChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyLinearChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
