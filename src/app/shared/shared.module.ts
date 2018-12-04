import { NgModule } from '@angular/core';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { MeterialModule } from './modules/meterial/meterial.module';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

@NgModule({
  imports: [
    
  ],
  exports:[OrderbyPipe,],
  declarations: [ OrderbyPipe,]
})
export class SharedModule { }
