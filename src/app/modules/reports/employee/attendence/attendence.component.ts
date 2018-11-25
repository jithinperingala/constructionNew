import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AttendenceService } from '../shared/attendence.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss'],
  providers: [DatePipe]
})
export class AttendenceComponent implements OnInit {

  constructor(private attendenceService: AttendenceService,
    private datePipe: DatePipe) {
  }
  empID = 27
  fromDate = new FormControl(new Date());
  toDate = new FormControl(new Date());
  totalAttendence
  attendenceBySite
  displayedColumns: string[] = ['AttendanceDate', 'SiteName'];
  ngOnInit() {

  }
  getCompleteAttendence(date) {
    this.attendenceService.getCompleteAttendence(this.empID, this.datePipe.transform(this.fromDate.value, 'yyyy-MM-dd'), this.datePipe.transform(this.toDate.value, 'yyyy-MM-dd')).subscribe(
      res => {
        console.log("res", res)
        if (res && res[0] && res[0][0]) {
          this.totalAttendence = res[0][0].TotalPresent
        }
      }
    )
  }
  getSitewiseAttendence() {
    this.attendenceService.getCompleteAttendenceByEmployee(this.empID, this.datePipe.transform(this.fromDate.value, 'yyyy-MM-dd'), this.datePipe.transform(this.toDate.value, 'yyyy-MM-dd')).subscribe(
      res => {
        console.log("res", res)
        if (res && res[0] && res[0][0]) {
          this.attendenceBySite=res[0]
        }
      }
    )
  }
}
