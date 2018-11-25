import { Injectable } from '@angular/core';
import { AjaxService } from 'src/app/core/services/ajax/ajax.service';
import { Pathgenerator } from 'src/app/core/services/ajax/pathgenerator';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  constructor(private http: AjaxService,private pathgenerator:Pathgenerator) { }
  getCompleteAttendence(empId,fromDate,toDate) {
    return this.http._get(this.pathgenerator.Report_EmployeeFullAttendence+"?empId="+empId+"&fromDate="+fromDate+"&toDate="+toDate)
  }
  getCompleteAttendenceByEmployee(empId,fromDate,toDate) {
    return this.http._get(this.pathgenerator.Report_EmployeeAttendenceBySite+"?empId="+empId+"&fromDate="+fromDate+"&toDate="+toDate)
  }
}
