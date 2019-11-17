import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ReturnsJsonArrayService {

  datas : any [];
    json = "./assets/data/people.json";
datadeal : any [];
    jsondeal = "./assets/data/deal.json";
    malecount :number;
    femalecount: number;
    contractorCount: number;
    redepC: number;

  constructor( private http : Http) {}

    getPost(){

      return this.http.get(this.json)
      .map(response =>
                 response.json())

       
    }

    getPostdeal(){

      return this.http.get(this.jsondeal)
      .map(response =>
                 response.json())

       
    }
      
  }

  //         for(let i=0; i < this.datas.length; i++){
  //               let Employee_Status = this.datas[i].Employee_Status;
  //               console.log(Employee_Status);
  //           }

  



// redep(): number{

//   var resource_type_FTE = this.datas.filter(e=> e.Resource_type === 'FTE').length;
//   var emp_status = this.datas.filter(e => e.Employee_Status === 'Redep' ).length;

  
//   return 

// }

  


