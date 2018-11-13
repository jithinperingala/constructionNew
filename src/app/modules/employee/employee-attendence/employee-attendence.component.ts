import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import { DatePipe } from '@angular/common'
import { FormControl } from '@angular/forms';
import { SessionService } from 'src/app/core/services/session/session';
import * as _ from 'underscore'
import { NotifierService } from 'angular-notifier';
import * as moment from 'moment';
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
  displayedColumns: string[] = ['EmployeeCode', 'FirstName', 'Mark', 'Mark2', 'Mark3', 'Mark4', 'Mark5', 'Mark6', 'Mark7'];

  date2
  date3
  date4
  date5
  date6
  date7
  constructor(private employeeService: EmployeeService,
    private datePipe: DatePipe,
    private sessionservice: SessionService,
    private notifi: NotifierService) {
    console.log("new Date(this.serializedDate.value).getDay()", new Date().getDay())

    this.siteData = this.employeeService.getSiteDetails()
    this.siteData.subscribe(res => {
      this.setAttendenceDate()
      this.workSites = res[0]
      this.workSite = 1
      this.getAttendencebyDate(this.serializedDate)
    })


  }
  siteData
  ngOnInit() {

  }

  setAttendenceDate() {
    this.date2 = moment(this.date.value).add(1, 'days');
    this.date3 = moment(this.date.value).add(2, 'days');
    this.date4 = moment(this.date.value).add(3, 'days');
    this.date5 = moment(this.date.value).add(4, 'days');
    this.date6 = moment(this.date.value).add(5, 'days');
    this.date7 = moment(this.date.value).add(6, 'days');
  }
  getAttendencebyDate(date) {
    this.setAttendenceDate()
    this.serializedDate = date
    this.attendence = {}
    let tempsearchdata = []
    this.employeeService.getAttendence(this.workSite, this.datePipe.transform(date.value, 'yyyy-MM-dd'), this.datePipe.transform(this.date7, 'yyyy-MM-dd')).subscribe(
      res => {
        // this.searchdata = res[0]
        let self = this
        console.log("res[0]", res)
        let tempkey = 0
        _.each(res, (data, key) => {
          if (data && data.Fk_Employee && data.Fk_Employee != tempkey) {
            data.attendence = []
            data.attendence.push(_.pluck(_.filter(res, function (num) { return num.Fk_Employee == data.Fk_Employee; }), 'AttendanceDate'))
            tempsearchdata.push(data)

          }
          if (key == res.length - 1) {
            console.log(tempsearchdata)
            self.searchdata = tempsearchdata
          }
          tempkey = data.Fk_Employee

        });
      }
    )
  }
  getDay(styleDate) {  
    if(styleDate !=undefined){
      if (new Date(styleDate).getDay() == 0)
      return 'red'
    else
      return 'black'
    }
    
  }
  getCheckedstatus(row, datefilter) {
    return _.contains(row.attendence[0], this.datePipe.transform(datefilter, 'yyyy-MM-dd'));
  }
  saveAttendence(Attendencedata, dateField) {
    console.log("datadata", Attendencedata)
    console.log("dateField", dateField)
    Attendencedata.date = this.datePipe.transform(dateField, 'yyyy-MM-dd')
    Attendencedata.status = 1
    Attendencedata.siteId = this.workSite
    Attendencedata.userId = this.sessionservice.userInfo['FkEmployee']
    Attendencedata.EmployeeID = Attendencedata.Fk_Employee
    console.log(Attendencedata)
    this.employeeService.saveAttendence(Attendencedata).subscribe(
      res => {

        let data = [1]
        let t = _.lastIndexOf(this.searchdata, Attendencedata)
        this.searchdata[t].Status = { data: [1] }
        console.log("_.lastIndexOf(this.searchdata, data)", this.searchdata)
        this.notifi.show;
        Attendencedata.attendence[0].push(this.datePipe.transform(dateField, 'yyyy-MM-dd'))
      }
    )
  }
}
