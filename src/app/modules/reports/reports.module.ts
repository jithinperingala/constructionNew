import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AttendenceComponent } from './employee/attendence/attendence.component';
import { MeterialModule } from 'src/app/shared/modules/meterial/meterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,MeterialModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [
    AttendenceComponent
  ]
})
export class ReportsModule { }
