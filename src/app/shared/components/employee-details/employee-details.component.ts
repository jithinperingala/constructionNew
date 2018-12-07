
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router'
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import { NotifyService } from '../../../core/services/notification/notify.service';
import { MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'underscore'
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  searchKey = ""
  searchdata
  employeetype
  empType
  displayedColumns: string[] = ['employee_code', 'first_name', 'mobile', 'address'];

  constructor(private employeeSer: EmployeeService,
    private router: Router, private notify: NotifyService,
    private EmployeeService: EmployeeService,
    public dialog: MatDialog, public dialogRef: MatDialogRef<EmployeeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data ) {}
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.EmployeeService.getEmployeeType().subscribe(res => {
      console.log("app-emp-reg", res)
      this.employeetype = res[0]
      this.empType = 1
      this.getEmployee()
    })

  }
  getEmployee() {
    console.log("empType", this.empType)
    console.log("after trin", this.searchKey)
    this.employeeSer.getEmployeeByemployeeType(this.searchKey, this.empType).subscribe(res => {
      this.searchdata = new MatTableDataSource(res[0])
      this.searchdata.sort = this.sort;
    })
  }
  setEmployeeID(id){
    console.log(id)
  }
}
