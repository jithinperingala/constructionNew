import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage.component';

const routes: Routes = [
  {
    path:'',component:LandingpageComponent,children:
    [
      {
        path:'employee',loadChildren:'src/app/modules/employee/employee.module#EmployeeModule'
      },{
        path: 'report', loadChildren: 'src/app/modules/reports/reports.module#ReportsModule'
      },{
        path: 'vendor', loadChildren: 'src/app/modules/vendor-details/vendor-details.module#VendorDetailsModule'
      }
      ,{
        path: 'accounts', loadChildren: 'src/app/modules/accounts/accounts.module#AccountsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingpageRoutingModule { }
