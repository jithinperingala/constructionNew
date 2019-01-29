import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AttendenceComponent } from './employee/attendence/attendence.component';
import { MeterialModule } from 'src/app/shared/modules/meterial/meterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LaborComponent } from './payment/labor/labor.component';
import { VendorComponent } from './payment/vendor/vendor.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,MeterialModule,FormsModule,ReactiveFormsModule,SharedModule
  ],
  declarations: [
    AttendenceComponent,
    LaborComponent,
    VendorComponent
  ]
})
export class ReportsModule { }
