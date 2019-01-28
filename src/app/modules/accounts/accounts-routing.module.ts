import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PettycashbookComponent } from './pettycashbook/pettycashbook.component';

const routes: Routes = [
  {
    
    path: '', component: PaymentComponent
  },
  {

    path: 'payment', component: PaymentComponent
  },
  {

    path: 'pettycashbook', component: PettycashbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
