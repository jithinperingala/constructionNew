import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendenceComponent } from './employee/attendence/attendence.component';

const routes: Routes = [
  {
    path:'attendence',
    component:AttendenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
