import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpserveService } from './../empserve.service';
import { EmpRequest } from './../emp.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  namepattern="[a-zA-Z ]*"
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  route: any;
  updateEmpid: number;
  empid: any;
  allEmployees: EmpRequest;
  allEmployeeData: any;
  selectedempId: any;
  newEmpForm: boolean;
  user: any;
  empForm: FormGroup;
  employees: any[];
  createEmployee: EmpRequest = <EmpRequest>{};
  empRequest: EmpRequest = <EmpRequest>{};
  showSelected: boolean;
  showmeupdate:boolean;
  showmeadd:boolean;
  constructor(private empserveservice: EmpserveService) { 
    this.showSelected = false;
    this.showmeupdate = false;
  }
  close(){
    this.showSelected = false;
  }
  removeObject(){
    this.showmeadd = true;
    this.showmeupdate = false;
  }
  addNew(){
    this.showSelected = true;
    this.showmeupdate = false;
    this.showmeadd = true;
    this.empForm.reset();
}
  ngOnInit(): void {
    // isValidFormSubmitted = null;
    
    this.empForm = new FormGroup({
      'empId': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'fName': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'lName': new FormControl('', Validators.required),
      'jobName': new FormControl('', [Validators.required, Validators.pattern(this.namepattern)]),
      'phoneNumber': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]+')]),
      'emailAddr': new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      'empCode': new FormControl('', [Validators.required]),
    })
    this.getEmployees();
  }

  getEmployees() {
    this.empserveservice.getAllArticles().subscribe(res => {
      this.allEmployees = res;
      console.log('Test', res);
    });
  }

  save() {
    // debugger;
    this.empRequest = <EmpRequest>{};
    this.empRequest.userID = this.empForm.controls['empId'].value;
    this.empRequest.firstName = this.empForm.controls['fName'].value;
    this.empRequest.lastName = this.empForm.controls['lName'].value;
    this.empRequest.jobName = this.empForm.controls['jobName'].value;
    this.empRequest.phoneNumber = this.empForm.controls['phoneNumber'].value;
    this.empRequest.emailAddress = this.empForm.controls['emailAddr'].value;
    this.empRequest.employeeCode = this.empForm.controls['empCode'].value;
    this.empserveservice.createEmployee(this.empRequest).subscribe(res => {
      console.log(res);
      this.getEmployees();
      // this.empForm.reset();
    this.showSelected = false;
    })
  }
  patchValueData(employeeData) {
    // debugger
    this.empForm.patchValue({
    'empId': employeeData.userID,
    'fName': employeeData.firstName,
    'lName': employeeData.lastName,
    'jobName': employeeData.jobName,
    'phoneNumber': employeeData.phoneNumber,
    'emailAddr': employeeData.emailAddress,
    'empCode': employeeData.employeeCode,
    });
    }
    
  updateEmployee1(updateEmpid) {
    console.log(updateEmpid);
    // debugger;
    this.empRequest = <EmpRequest>{};
    this.empRequest.userID = this.empForm.controls['empId'].value;
    this.empRequest.firstName = this.empForm.controls['fName'].value;
    this.empRequest.lastName = this.empForm.controls['lName'].value;
    this.empRequest.jobName = this.empForm.controls['jobName'].value;
    this.empRequest.phoneNumber = this.empForm.controls['phoneNumber'].value;
    this.empRequest.emailAddress = this.empForm.controls['emailAddr'].value;
    this.empRequest.employeeCode = this.empForm.controls['empCode'].value;
    this.empserveservice.updateEmployee(this.updateEmpid, this.empRequest).subscribe(res => {
    console.log(res);
    this.getEmployees();
    this.empForm.reset();
    this.showSelected = false;
    })
    
    }

  empDelete(empId: number) {
    // debugger
    if (confirm("Are you sure you want to delete?")) {
      this.empserveservice.deleteEmployee(empId).subscribe(res => {
        console.log(res);
        this.getEmployees();
      })
    }
  }

  editEmployee(empid){
    // debugger
    this.showSelected = true;
     this.patchValueData(empid)
     this.updateEmpid = empid.id;
     this.showmeupdate = true;
     this.showmeadd = false;
     
  }
  

}
