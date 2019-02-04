import { NgModule } from '@angular/core';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { MeterialModule } from './modules/meterial/meterial.module';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { BankAccountsDetailsComponent } from './components/bank-accounts-details/bank-accounts-details.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MeterialModule,CommonModule,ReactiveFormsModule,FormsModule
  ],
  exports:[OrderbyPipe,BankAccountsDetailsComponent,CardHeaderComponent],
  declarations: [ OrderbyPipe, BankAccountsDetailsComponent, CardHeaderComponent,]
})
export class SharedModule { }
