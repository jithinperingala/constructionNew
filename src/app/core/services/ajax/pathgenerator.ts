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
    Report_EmployeeAttendenceBySite: "reports/employees/attendence/attendenceByEmployee",
    Report_contractorAccounts: "reports/accounts/vendor/getContractorAccounts",
    Report_supplierAccounts: "reports/accounts/vendor/getSupplierAccounts",

    saveSupplierDetails: "vendor/supplier",
    saveContractorDetails: "vendor/contractor",

    saveBankDetails: "accounts/bank",

    getFromUser: "accounts/from/fromUser",
    getToUser: "accounts/from/toUser",

    getAccountDetails: "accounts/bank/bankAccountDetails",
    savePaymentDetails: "accounts/payments/savePayment",
    savePettyCashDetails: "accounts/payments/savepettyCashPayment"

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
  get saveSupplierDetails() {
    return this.generatePath(this.uriCollection.saveSupplierDetails);
  }
  get saveContractorDetails() {
    return this.generatePath(this.uriCollection.saveContractorDetails);
  }
  get saveBankDetails() {
    return this.generatePath(this.uriCollection.saveBankDetails);
  }
  get getFromUser() {
    return this.generatePath(this.uriCollection.getFromUser);
  }
  get getToUser() {
    return this.generatePath(this.uriCollection.getToUser);
  }
  get getAccountDetails() {
    return this.generatePath(this.uriCollection.getAccountDetails);
  }
  get savePaymentDetails() {
    return this.generatePath(this.uriCollection.savePaymentDetails);
  }
  get savePettyCashDetails() {
    return this.generatePath(this.uriCollection.savePettyCashDetails);
  }
  get Report_contractorAccounts() {
    return this.generatePath(this.uriCollection.Report_contractorAccounts);
  }
  get Report_supplierAccounts() {
    return this.generatePath(this.uriCollection.Report_supplierAccounts);
  }
}
