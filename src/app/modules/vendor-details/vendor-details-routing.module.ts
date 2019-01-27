import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorComponent } from './contractor/contractor.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  {
    path:"contractor",component:ContractorComponent
  }, {
    path:"supplier",component:SupplierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorDetailsRoutingModule { }
