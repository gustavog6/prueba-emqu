import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { loginGuard } from './shared/guards/login.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'equipment', loadChildren: () => import('./equipment-management/equipment-management.module').then(m => m.EquipmentManagementModule) },
                    { path: 'test', loadChildren: () => import('./test-management/test-management.module').then(m => m.TestManagementModule) },
                    { path: 'statistics', loadChildren: () => import('./statistics-management/statistics-management.module').then(m => m.StatisticsManagementModule) }
                ],
                canActivate: [loginGuard]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
