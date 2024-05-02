import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentManagementRoutingModule } from './equipment-management-routing.module';
import { EquipmentListComponent } from './pages/equipment-list/equipment-list.component';
import { EquipmentDetailComponent } from './pages/equipment-detail/equipment-detail.component';
import { EquipmentFormComponent } from './components/equipment-form/equipment-form.component';
import { EquipmentTableComponent } from './components/equipment-table/equipment-table.component';
import { SharedPrimengModule } from '../shared/shared-primeng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EquipmentListComponent,
    EquipmentDetailComponent,
    EquipmentFormComponent,
    EquipmentTableComponent
  ],
  imports: [
    CommonModule,
    EquipmentManagementRoutingModule,
    SharedPrimengModule,
    ReactiveFormsModule
  ]
})
export class EquipmentManagementModule { }
