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
      this.employeeService.getallocatedEmployes(this.workSite, " ").subscribe(res => {
        this.searchdata = res[0]
        console.log("app-emp-reg", this.searchdata)
        this.getAttendencebyDate(this.serializedDate)
      })
    })


  }
  getAttendencebyDate(date) {
    this.serializedDate = date
    this.attendence = {}
    this.employeeService.getAttendence(this.workSite, this.datePipe.transform(date.value, 'yyyy-MM-dd')).subscribe(
      res => {

        _.map(this.searchdata, (data, key) => {
          let a = _.find(res[0], function (result) { return result.employee_id == data.EmployeeID });
          if (a) {
            this.searchdata[key].status = true
            console.log("res[data]", a)
          }
          else {
            this.searchdata[key].status = false
          }

        })
        console.log("getAttendence", res)

        // let tempAttentence = {}

        // Object.assign(tempAttentence, _.pluck(res[0], 'employee_id'));

        // this.attendence = _.invert(tempAttentence);
        // _.map(tempAttentence, (data, key) => {

        //   data = true
        //   console.log("res[data]", this.attendence)
        // })
        // console.log("getAttendence", this.attendence)

      }
    )
  }
  selectEmployeesBySite() {
    this.employeeService.getallocatedEmployes(this.workSite, " ").subscribe(res => {
      this.searchdata = res[0]
      console.log("app-emp-reg", this.searchdata)
      this.getAttendencebyDate(this.serializedDate)
    })
  }

  saveAttendence(data) {
    console.log(this.attendence)
    data.date = this.datePipe.transform(this.serializedDate.value, 'yyyy-MM-dd')
    data.status = this.attendence[data.EmployeeID] == true ? 1 : 0
    data.siteId = this.workSite
    data.userId = this.sessionservice.userInfo['FkEmployee']
    console.log(data)
    this.employeeService.saveAttendence(data).subscribe(
      res => {
        console.log(res)
        this.notifi.show;
      }
    )
  }
}
