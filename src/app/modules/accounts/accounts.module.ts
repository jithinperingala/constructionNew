import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountsRoutingModule } from "./accounts-routing.module";
import { MeterialPurchaseComponent } from "./meterial-purchase/meterial-purchase.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { UnitDetailsComponent } from "./unit-details/unit-details.component";
import { PaymentComponent } from "./payment/payment.component";
import { PaymentViewComponent } from "./payment/payment-view/payment-view.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MeterialModule } from "src/app/shared/modules/meterial/meterial.module";
import { PettycashbookComponent } from "./pettycashbook/pettycashbook.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaymentBlockComponent } from "./payment/payment-block/payment-block.component";
import { LaborPaymentComponent } from "./payment/labor-payment/labor-payment.component";

@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MeterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MeterialPurchaseComponent,
    ItemDetailsComponent,
    UnitDetailsComponent,
    PaymentComponent,
    PaymentViewComponent,
    PettycashbookComponent,
    PaymentBlockComponent,
    LaborPaymentComponent
  ]
})
export class AccountsModule {}
