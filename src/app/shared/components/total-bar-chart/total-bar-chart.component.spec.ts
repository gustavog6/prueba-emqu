import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBarChartComponent } from './total-bar-chart.component';

describe('TotalBarChartComponent', () => {
  let component: TotalBarChartComponent;
  let fixture: ComponentFixture<TotalBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
