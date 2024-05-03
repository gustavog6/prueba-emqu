import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsManagementRoutingModule } from './statistics-management-routing.module';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [StatisticsComponent],
    imports: [CommonModule, StatisticsManagementRoutingModule, SharedModule],
})
export class StatisticsManagementModule {}
