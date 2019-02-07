import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeService } from "src/app/modules/employee/shared/employee.service";
import { NotifyService } from "../../../core/services/notification/notify.service";
import { OrderbyPipe } from "../../../shared/pipes/orderby.pipe";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { MatSort, MatTableDataSource, MatDialog } from "@angular/material";
import { DeletePopupComponent } from "src/app/shared/components/delete-popup/delete-popup.component";
import * as _ from "underscore";

@Component({
  selector: "app-emp-search",
  templateUrl: "./employee-search.component.html",
  styleUrls: ["./employee-search.component.scss"]
})
export class EmployeeSearchComponent implements OnInit {
  searchKey = "";
  searchdata;
  orderBy = new OrderbyPipe();
  employeetype;
  empType;
  modalRef: BsModalRef;
  displayedColumns: string[] = [
    "employee_code",
    "first_name",
    "mobile",
    "identity_card_number",
    "insurance_number",
    "address",
    "allocateTo",
    "removeAllocation"
  ];
  constructor(
    private employeeSer: EmployeeService,
    private router: Router,
    private notify: NotifyService,
    private EmployeeService: EmployeeService,
    public dialog: MatDialog
  ) {}
  @ViewChild(MatSort) sort: MatSort;
  openDialog(employee): void {
    console.log(employee);
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width: "250px",
      data: {
        name: employee.first_name,
        id: employee.employee_id,
        process: "Delete"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.DeleteEmployee(result);
        console.log(result);
      }
    });
  }
  ngOnInit() {
    this.EmployeeService.getEmployeeType().subscribe(res => {
      console.log("app-emp-reg", res);
      this.employeetype = res[0];
      this.empType = 1;
      this.getEmployee();
    });
  }
  getEmployee() {
    console.log("empType", this.empType);
    console.log("after trin", this.searchKey);
    this.employeeSer
      .getEmployeeByemployeeType(this.searchKey, this.empType)
      .subscribe(res => {
        console.log("res", res);
        this.searchdata = new MatTableDataSource(res[0]);
        this.searchdata.sort = this.sort;
      });
  }

  DeleteEmployee(id) {
    this.employeeSer.DeleteEmployee(id).subscribe(res => {
      this.searchdata.data = _.filter(this.searchdata.data, data => {
        return data.employee_id !== id;
      });
      // let index = this.searchdata.data.findIndex(x => x.employee_id == id);
      // this.searchdata.data.splice(index, 1)
      this.notify._sucessDeleteMessage();
    });
  }

  editEmployee(id) {
    this.router.navigate(["dashbord/employee/edit/", id]);
  }
}
