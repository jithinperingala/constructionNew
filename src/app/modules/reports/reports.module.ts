import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AttendenceComponent } from './employee/attendence/attendence.component';
import { MeterialModule } from 'src/app/shared/modules/meterial/meterial.module';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,MeterialModule
  ],
  declarations: [
    AttendenceComponent
  ]
})
export class ReportsModule { }
