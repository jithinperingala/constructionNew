import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import { DatePipe } from '@angular/common'
import { FormControl } from '@angular/forms';
import { SessionService } from 'src/app/core/services/session/session';
import * as _ from 'underscore'
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-employee-attendence',
  templateUrl: './employee-attendence.component.html',
  styleUrls: ['./employee-attendence.component.scss'],
  providers: [DatePipe]
})
export class EmployeeAttendenceComponent implements OnInit {
  workSites
  searchdata
  workSite
  attendence = {}
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  displayedColumns: string[] = ['EmployeeCode', 'FirstName', 'employee_type_name', 'Mark'];
  constructor(private employeeService: EmployeeService,
    private datePipe: DatePipe,
    private sessionservice: SessionService,
    private notifi: NotifierService) {
  }

  ngOnInit() {

    this.employeeService.getSiteDetails().subscribe(res => {

      this.workSites = res[0]
      this.workSite = 1
      this.getAttendencebyDate(this.serializedDate)
    })


  }
  getAttendencebyDate(date) {
    this.serializedDate = date
    this.attendence = {}
    this.employeeService.getAttendence(this.workSite, this.datePipe.transform(date.value, 'yyyy-MM-dd')).subscribe(
      res => {
        this.searchdata = res[0]
        console.log("res[data]", res[0])
      }
    )
  }

  saveAttendence(Attendencedata) {
    console.log("datadata", Attendencedata)
    Attendencedata.date = this.datePipe.transform(this.serializedDate.value, 'yyyy-MM-dd')
    Attendencedata.status = 1
    Attendencedata.siteId = this.workSite
    Attendencedata.userId = this.sessionservice.userInfo['FkEmployee']
    Attendencedata.EmployeeID = Attendencedata.Fk_Employee
    console.log(Attendencedata)
    this.employeeService.saveAttendence(Attendencedata).subscribe(
      res => {

       let data=[1]
        let t=_.lastIndexOf(this.searchdata, Attendencedata)
        this.searchdata[t].Status={data:[1]}
        console.log("_.lastIndexOf(this.searchdata, data)",  this.searchdata)
        this.notifi.show;
      }
    )
  }
}
