import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class Pathgenerator {
  uriCollection = {
    createUpdateEmployee: "employee/createUpdateEmployee",
    getEmployeeDetails: "employee/getEmployeeDetails",
    DeleteEmployee: "employee/deleteEmployee",
    searchByEmpType: "employee/getEmployeeDetails/empType",
    uploadEmployeeImage: "employee/createUpdateEmployee/photoUpload",
    uploadAadar: "employee/createUpdateEmployee/aadarUpload",
    uploadInsurance: "employee/createUpdateEmployee/insuranceUpload",
    uploadBlob: "employee/createUpdateEmployee/blobUpload",

    getEmployeeType: "employee/getEmployeeType",
    createUpdateEmployeeType: "employee/createUpdateEmployeeType",
    DeleteEmployeeType: "employee/deleteEmployeeType",

    saveEmployeeAttendence: "employee/attendence",

    validateUser: "validateUser/login",

    getSiteDetails: "site/getSiteDetails",
    getallocatedEmployes: "site/getallocatedEmployes",
    saveallocatedEmployes: "site/saveallocatedEmployes",
    removeallocatedEmployes: "site/removeallocatedEmployes",

    EmployeePayment: "employee/payment",
    EmployeePaymentReport: "employee/paymentReport",

    Report_EmployeeFullAttendence: "reports/employees/attendence",
    Report_EmployeeAttendenceBySite:
      "reports/employees/attendence/attendenceByEmployee",

    saveVendorDetails: "vendor/supplier",

    saveBankDetails: "accounts/bank"
  };

  private generatePath(uri): string {
    return environment.getBaseUrl + uri;
  }
  uploadEmployeeImage() {
    return this.generatePath(this.uriCollection.uploadEmployeeImage);
  }
  uploadEmployeeImageBlob() {
    return this.generatePath(this.uriCollection.uploadBlob);
  }
  uploadEmployeeInsurance() {
    return this.generatePath(this.uriCollection.uploadInsurance);
  }
  uploadEmployeeAadar() {
    return this.generatePath(this.uriCollection.uploadAadar);
  }
  createUpdateEmployee() {
    return this.generatePath(this.uriCollection.createUpdateEmployee);
  }
  getEmployeeDetails() {
    return this.generatePath(this.uriCollection.getEmployeeDetails);
  }
  getAllEmployeebyId() {
    return this.generatePath(this.uriCollection.searchByEmpType);
  }
  deleteEmployee() {
    return this.generatePath(this.uriCollection.DeleteEmployee);
  }

  getEmployeeType(): string {
    return this.generatePath(this.uriCollection.getEmployeeType);
  }
  createUpdateEmployeeTYpe() {
    return this.generatePath(this.uriCollection.createUpdateEmployeeType);
  }
  deleteEmployeeType() {
    return this.generatePath(this.uriCollection.DeleteEmployeeType);
  }
  get validateuser() {
    return this.generatePath(this.uriCollection.validateUser);
  }
  get employeePayment() {
    return this.generatePath(this.uriCollection.EmployeePayment);
  }
  get getSiteDetails() {
    return this.generatePath(this.uriCollection.getSiteDetails);
  }
  get saveallocatedEmployes() {
    return this.generatePath(this.uriCollection.saveallocatedEmployes);
  }
  get removeallocatedEmployes() {
    return this.generatePath(this.uriCollection.removeallocatedEmployes);
  }
  get employeePaymentReport() {
    return this.generatePath(this.uriCollection.EmployeePaymentReport);
  }
  get getallocatedEmployes() {
    return this.generatePath(this.uriCollection.getallocatedEmployes);
  }
  get saveEmployeeAttendence() {
    return this.generatePath(this.uriCollection.saveEmployeeAttendence);
  }
  get Report_EmployeeFullAttendence() {
    return this.generatePath(this.uriCollection.Report_EmployeeFullAttendence);
  }
  get Report_EmployeeAttendenceBySite() {
    return this.generatePath(
      this.uriCollection.Report_EmployeeAttendenceBySite
    );
  }
  get saveVendorDetails() {
    return this.generatePath(this.uriCollection.saveVendorDetails);
  }
  get saveBankDetails() {
    return this.generatePath(this.uriCollection.saveBankDetails);
  }
}
