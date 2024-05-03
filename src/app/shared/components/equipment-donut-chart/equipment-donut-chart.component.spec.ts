import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDonutChartComponent } from './equipment-donut-chart.component';

describe('EquipmentDonutChartComponent', () => {
  let component: EquipmentDonutChartComponent;
  let fixture: ComponentFixture<EquipmentDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentDonutChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
