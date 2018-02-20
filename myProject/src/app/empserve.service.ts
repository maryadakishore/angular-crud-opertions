  import { EmpRequest } from './emp.modal';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { EmployeeComponent } from './employee/employee.component';

@Injectable()
export class EmpserveService {
  allemployes: EmpRequest[];
  // URL for CRUD operations
  articleUrl = 'http://localhost:3000/Employees';
  constructor(private http: Http) { }
 

  getEmployee(id){
    this.allemployes.find(function(element) {
      return element == id;
    });
  }


  getAllArticles(): Observable<any> {
    return this.http.get(this.articleUrl).map( (res) => {
      return this.allemployes = res.json();
    }); 
  }

  // add employee

  createEmployee(allEmployeeData: EmpRequest): Observable<any> {
    debugger
    return this.http.post(this.articleUrl, allEmployeeData).map(res => res.json());
  }

  // delete employee

  deleteEmployee(empId) {
    return this.http.delete(this.articleUrl + "/" + empId).map(res => res.json());
  }

  //Fetch emp by id
  getempById(empId: Number): Observable<any> {
    // alert(empId)
    return this.http.get(this.articleUrl + "/" + empId ).map(res => res.json());
    
  } 
  //Update employee

  updateEmployee(empId:Number, allEmployeeData: EmpRequest): Observable<any> {
   debugger
    return this.http.put(this.articleUrl + "/" + empId, allEmployeeData).map(res => res);
  }
  
}
