import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
    { path: '', component: StatisticsComponent },
    { path: '**', redirectTo: '/notfound', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StatisticsManagementRoutingModule {}
