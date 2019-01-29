import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendenceComponent } from './employee/attendence/attendence.component';
import { LaborComponent } from './payment/labor/labor.component';
import { VendorComponent } from './payment/vendor/vendor.component';

const routes: Routes = [
  {
    path:'attendence',
    component:AttendenceComponent
  },
  {
    path:'labor',
    component:LaborComponent
  }, {
    path:'supplier',
    component:VendorComponent
  }
  , {
    path:'condractor',
    component:VendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
