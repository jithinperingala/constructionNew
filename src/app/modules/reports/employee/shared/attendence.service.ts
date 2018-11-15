import { Injectable } from '@angular/core';
import { AjaxService } from 'src/app/core/services/ajax/ajax.service';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  constructor(private http: AjaxService) { }
  getCompleteAttendence() {
    return this.http._get('')
  }
}
