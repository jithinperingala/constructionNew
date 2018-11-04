import { NgModule } from '@angular/core';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { MeterialModule } from './modules/meterial/meterial.module';

@NgModule({
  imports: [
  ],
  exports:[OrderbyPipe],
  declarations: [ OrderbyPipe]
})
export class SharedModule { }
