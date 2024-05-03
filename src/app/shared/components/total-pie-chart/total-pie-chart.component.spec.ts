import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPieChartComponent } from './total-pie-chart.component';

describe('TotalPieChartComponent', () => {
  let component: TotalPieChartComponent;
  let fixture: ComponentFixture<TotalPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalPieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
