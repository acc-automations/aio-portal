import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IData } from './data';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({ 
  providedIn: 'root'
})
export class MyHttpServiceService {
  
      _url : string  = "./assets/data/deal-data.json";
      public  myData: any [];
    
       
  constructor( private http : Http) {}
   
         getPosts(){
              return  this.http.get(this._url)
                 .map(response => response.json())
               
}

}