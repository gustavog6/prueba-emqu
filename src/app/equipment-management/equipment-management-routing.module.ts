import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './pages/equipment-list/equipment-list.component';
import { EquipmentDetailComponent } from './pages/equipment-detail/equipment-detail.component';

const routes: Routes = [
  { path:'', component : EquipmentListComponent },
  { path:'add', component : EquipmentDetailComponent },
  { path:'detail/:id', component: EquipmentDetailComponent },
  { path: 'detail/:id/:action', component: EquipmentDetailComponent },
  { path:'**', redirectTo:'/notfound', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentManagementRoutingModule { }
