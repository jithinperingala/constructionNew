import { Injectable } from '@angular/core';
import { AjaxService } from 'src/app/core/services/ajax/ajax.service';

@Injectable({
  providedIn: 'root'
})
export class FromToService {

  constructor(private http: AjaxService) { }
  getFromData() {
    return this.http._get("")
  }
  getToData() {
    return this.http._get("")
  }
}
