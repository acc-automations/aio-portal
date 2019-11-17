import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label,PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
import { ChartType } from 'chart.js';
import * as CanvasJS from '../canvasjs-2.3.2/canvasjs.min.js';
import { Http } from '@angular/http';
import { ReturnsJsonArrayService } from 'app/dashboard/returns-json-array.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent  {

   datas : any [];
    json = "./assets/data/people.json";
    errorMessage_Pi: any;
    i: any [];

  constructor(private pie : ReturnsJsonArrayService, http : Http ) {
 
}


ngOnInit() {

  this.pie.getPost().subscribe(res =>{

    this.datas =res;
    console.log(this.datas);
    // for(var i = 5; i<=13; i++){

    //   var pi = this.datas.filter(e=> e.Level === i.toString() && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length;
    //   console.log(pi);
    // }
    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: ""
      },

      
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%), {}",
        indexLabel: "{name} - {y} - #percent%",
        labelPosition: "inside",
        labeltext : " inside,{y}",
        dataPoints: [
          { y: this.datas.filter(e=> e.Level === '5' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length, name: "CL5" },
          { y: this.datas.filter(e=> e.Level === '6' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length, name: "CL6" },
          { y: this.datas.filter(e=> e.Level === '7' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length, name: "CL7" },
          { y: this.datas.filter(e=> e.Level === '8' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length, name: "CL8" },
          { y: this.datas.filter(e=> e.Level === '9' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length, name: "CL9" },
          { y: this.datas.filter(e=> e.Level === '10' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length, name: "CL10"},
          { y: this.datas.filter(e=> e.Level === '11' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length, name: "CL11" },
          { y: this.datas.filter(e=> e.Level === '12' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length, name: "CL12" },
          { y: this.datas.filter(e=> e.Level === '13' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length, name: "CL13" },
          { y: this.datas.filter(e=> e.Level === 'Contractor' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length, name: "Contractor" }
        ]
      }]
    });
      
    chart.render();
  
    
  }, error => this.errorMessage_Pi =<any>error);

  
  
  
    }
  }
 
