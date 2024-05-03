import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPrimengModule } from './shared-primeng.module';
import { EquipmentDonutChartComponent } from './components/equipment-donut-chart/equipment-donut-chart.component';
import { TotalPieChartComponent } from './components/total-pie-chart/total-pie-chart.component';
import { TotalBarChartComponent } from './components/total-bar-chart/total-bar-chart.component';
import { MonthlyLinearChartComponent } from './components/monthly-linear-chart/monthly-linear-chart.component';
import { ReactiveFormsModule } from '@angular/forms';

const LIST = [
    EquipmentDonutChartComponent,
    MonthlyLinearChartComponent,
    TotalBarChartComponent,
    TotalPieChartComponent,
];

@NgModule({
    declarations: [LIST],
    imports: [CommonModule, SharedPrimengModule, ReactiveFormsModule],
    exports: [LIST],
})
export class SharedModule {}
