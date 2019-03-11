import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./modules/login/login.component";
import { NotificationModule } from "./core/services/notification/notification.module";
import { DeletePopupComponent } from "./shared/components/delete-popup/delete-popup.component";
import { MeterialModule } from "./shared/modules/meterial/meterial.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { ReportsComponent } from "./modules/reports/reports.component";
import { EmployeeDetailsComponent } from "./shared/components/employee-details/employee-details.component";
import { HttpConfigInterceptor } from "./core/services/ajax/httpconfig.interceptor";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeletePopupComponent,
    ReportsComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NotificationModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    MeterialModule,
    NgxSpinnerModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  entryComponents: [DeletePopupComponent, EmployeeDetailsComponent]
})
export class AppModule { }
