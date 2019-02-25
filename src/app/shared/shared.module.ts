import { NgModule } from '@angular/core';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { MeterialModule } from './modules/meterial/meterial.module';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { BankAccountsDetailsComponent } from './components/bank-accounts-details/bank-accounts-details.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SiteDropDownComponent } from './components/site-drop-down/site-drop-down.component';
import { FromAccountDropdownComponent } from './components/from-account-dropdown/from-account-dropdown.component';
import { ToAccountDropdownComponent } from './components/to-account-dropdown/to-account-dropdown.component';

@NgModule({
  imports: [
    MeterialModule, CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports: [OrderbyPipe, BankAccountsDetailsComponent, CardHeaderComponent, SiteDropDownComponent, FromAccountDropdownComponent, ToAccountDropdownComponent],
  declarations: [OrderbyPipe, BankAccountsDetailsComponent, CardHeaderComponent, SiteDropDownComponent, FromAccountDropdownComponent, ToAccountDropdownComponent,]
})
export class SharedModule { }
