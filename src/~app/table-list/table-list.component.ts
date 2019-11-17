import {  Http } from '@angular/http';
import { Component, OnInit, ViewChild  } from '@angular/core';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent   { 
    datas : any [];
    json = "./assets/data/deal-data.json"  // https://jsonplaceholder.typicode.com/posts
  constructor(private http : Http) {    
      http.get(this.json)  
      .subscribe(response =>{
         this.datas = response.json();
      })  
  }
}