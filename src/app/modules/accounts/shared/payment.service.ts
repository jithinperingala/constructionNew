import { Injectable } from '@angular/core';
import { AjaxService } from 'src/app/core/services/ajax/ajax.service';
import { Pathgenerator } from 'src/app/core/services/ajax/pathgenerator';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: AjaxService, private pathgen: Pathgenerator) { }

  savePaymentDetails(data) {
    return this.http._post(this.pathgen.savePaymentDetails, data)
  }

  savePettyCashBook(data) {
    return this.http._post("", data)
  }
}
