import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AttendenceComponent } from './employee/attendence/attendence.component';
import { MeterialModule } from 'src/app/shared/modules/meterial/meterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,MeterialModule,FormsModule,ReactiveFormsModule,SharedModule
  ],
  declarations: [
    AttendenceComponent
  ]
})
export class ReportsModule { }
