import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorDetailsRoutingModule } from './vendor-details-routing.module';
import { ContractorComponent } from './contractor/contractor.component';
import { SupplierComponent } from './supplier/supplier.component';
import { MeterialModule } from 'src/app/shared/modules/meterial/meterial.module';
import { DetailsGenericComponent } from './details-generic/details-generic.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ContractorComponent,
    SupplierComponent,
    DetailsGenericComponent
  ],
  imports: [
    CommonModule,
    VendorDetailsRoutingModule,MeterialModule,SharedModule
  ]
})
export class VendorDetailsModule { }
