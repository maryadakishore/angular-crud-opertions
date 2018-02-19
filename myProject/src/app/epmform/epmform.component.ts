import { EmpserveService } from './../empserve.service';
import { EmpRequest } from './../emp.modal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-epmform',
  templateUrl: './epmform.component.html',
  styleUrls: ['./epmform.component.css']
})
export class EpmformComponent implements OnInit {
  person: EmpRequest = <EmpRequest>{} ;
  allEmployees: EmpRequest;
  constructor(private empserveservice: EmpserveService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getEmployees();
    // const myid = this.route.snapshot.params['id'];
    // console.log(myid)
    // this.getEmpId(myid);

    this.route.params.subscribe( (params:Params) => {
      this.getEmpId(params['id']);
    }) 
  }

  getEmpId(id) {
    this.empserveservice.getempById(id).subscribe(res => {
      console.log(res)
      this.person = res;
    })
  }



  // getEmployees() {
  //   this.empserveservice.getAllArticles().subscribe(res => {
  //     this.allEmployees = res;
  //     console.log('', res);
  //   });
  // }
}
