import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AttendenceService } from '../shared/attendence.service';
import { DatePipe } from '@angular/common';
import {MatDialog,MatDialogRef} from '@angular/material';
import { EmployeeDetailsComponent } from 'src/app/shared/components/employee-details/employee-details.component';
@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss'],
  providers: [DatePipe]
})
export class AttendenceComponent implements OnInit {

  constructor(private attendenceService: AttendenceService,
    private datePipe: DatePipe,public dialog: MatDialog) {
  }
  empID = 27
  fromDate = new FormControl(new Date());
  toDate = new FormControl(new Date());
  totalAttendence
  attendenceBySite
  displayedColumns: string[] = ['AttendanceDate', 'SiteName'];
  ngOnInit() {

  }
  openDialog() {
    const dialogRef = this.dialog.open(EmployeeDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      
    });
  }
  getCompleteAttendence(date) {
    this.attendenceService.getCompleteAttendence(this.empID, this.datePipe.transform(this.fromDate.value, 'yyyy-MM-dd'), this.datePipe.transform(this.toDate.value, 'yyyy-MM-dd')).subscribe(
      res => {
        console.log("res", res)
        if (res && res[0] && res[0][0]) {
          this.totalAttendence = res[0][0].TotalPresent
          this.attendenceBySite = []
        }
        else {
          this.totalAttendence = 0
          this.attendenceBySite = []
        }
      }
    )
  }
  getSitewiseAttendence() {
    this.attendenceService.getCompleteAttendenceByEmployee(this.empID, this.datePipe.transform(this.fromDate.value, 'yyyy-MM-dd'), this.datePipe.transform(this.toDate.value, 'yyyy-MM-dd')).subscribe(
      res => {
        console.log("res", res)
        if (res && res[0] && res[0][0]) {
          this.attendenceBySite = res[0]
        }
      }
    )
  }
}
