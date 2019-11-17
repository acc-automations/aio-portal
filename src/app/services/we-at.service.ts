import { Injectable } from '@angular/core';
import { WeAt } from '../we-at/we-at-schema';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { WeAt_PF } from '../we-at/we-at-pf-schema';
import { WeAt_RF } from '../we-at/we-at-rf-schema';
import { WeAt_IA } from '../we-at/we-at-ia-schema';

@Injectable({
  providedIn: 'root'
})
export class WeAtService {

  dashboardData: WeAt[];
  dbvalues: WeAt;
  static current_week_ir : number;
  static current_week_oir : number;
  static current_week_vr : number;


  /*
  constructor(private httpClient: HttpClient) { }

  getDashboardData() {
    this.data = {
      "_id":"",
        "ideas_submited_count" : 44,
        "ipp" : 6.32,
        "implementation_rate" : 90,
        "ontime_implementation_rate" : 50,
        "ontime_validation" : 10,
        "ideas_redflagged_7days" : 20,
        "ideas_redflagged_30days" : 30
    };

    return this.data;
  }
}



*/


  constructor(private httpClient: HttpClient) {

    /*
    
        this.getDashboardData().subscribe(data => {
          console.log("injected");
          console.log(data);
    
        });
    
        this.getIdeasAgingRawDataDB().subscribe(data => {
    
        });*/

    /*this.getDashboardData()
          .subscribe(data => this.dashboardData = data);*/

  }

  


  getDashboardData(): Observable<WeAt> {
    //return this.httpClient.get<WeAt>('https://my-json-server.typicode.com/typicode/demo/posts').catch(this.handleError);
    return this.httpClient.get<WeAt>('./assets/data/we-at-processed-data.json');

  }

  getWeekStack(weeks_limit): Observable<WeAt[]> {
    //return this.httpClient.get<WeAt>('https://my-json-server.typicode.com/typicode/demo/posts').catch(this.handleError);
    return this.httpClient.get<WeAt[]>('./assets/data/we-at-processed-data.json');

  }



  /*
     getDashboardData(){
  
      
  
      return this.httpClient.get< WeAt[]>("https://my-json-server.typicode.com/typicode/demo/posts");
      
      
  
  
     // return this.httpClient.get("./assets/data/raw-data-json/weat_db.json");
   
     
    }*/



  public getIdeasAgingRawDataDB(): Observable<any> {

    return this.httpClient.get("./assets/data/raw-data-json/weat_ideas_aging_rawdata_db.json");

  }

  public getPFData(): Observable<WeAt_PF[]> {

    return this.httpClient.get<WeAt_PF[]>("./assets/data/we-at-pf-raw-data.json");
  }

  public getRFData(): Observable<WeAt_RF[]> {
    return this.httpClient.get<WeAt_RF[]>("./assets/data/we-at-rf-raw-data.json");
  }
  public getIAData(): Observable<WeAt_IA[]> {
    return this.httpClient.get<WeAt_IA[]>("./assets/data/we-at-ia-raw-data.json");
  }

  // public pushWeekData(){

  //   this.getPFData().subscribe(
  //     res => { 
  //       this.dbvalues = res;
  //       console.log(this.dbvalues);
  //     }
  //   );

  // }

}