import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestManagementRoutingModule } from './test-management-routing.module';
import { TestComponent } from './pages/test/test.component';
import { TestTableComponent } from './components/test-table/test-table.component';
import { TesterComponent } from './components/tester/tester.component';
import { SharedPrimengModule } from '../shared/shared-primeng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TestComponent,
    TestTableComponent,
    TesterComponent
  ],
  imports: [
    CommonModule,
    TestManagementRoutingModule,
    SharedPrimengModule,
    ReactiveFormsModule
  ]
})
export class TestManagementModule { }
