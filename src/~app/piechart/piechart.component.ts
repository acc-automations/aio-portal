import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label,PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
import { ChartType } from 'chart.js';
import * as CanvasJS from '../canvasjs-2.3.2/canvasjs.min.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent  {
  // public doughnutChartLabels: Label[] = [];
  // public doughnutChartData: MultiDataSet = [
  //   [150, 50, 80,52, 66, 56, 68],
  //   [50, 50, 90, 40, 52, 66, 46, 48],
  //   // [250, 130, 70],
  // ];
  // public doughnutChartType: ChartType = 'doughnut';
  

  // constructor() { }

  // ngOnInit() {
  // }

  // // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: ""
      },

      data: [{
        type: "pie",
        showInLegend: false,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%), {}",
        indexLabel: "{name} - {y} - #percent%",
        labelPosition: "inside",
        labeltext : " inside,{y}",
        dataPoints: [
          { y: 0, name: "CL5" },
          { y: 1, name: "CL6" },
          { y: 0, name: "CL7" },
          { y: 1, name: "CL8" },
          { y: 1, name: "CL9" },
          { y: 3, name: "CL10"},
          { y: 5, name: "CL11" },
          { y: 9, name: "CL12" },
          { y: 0, name: "CL13" },
          { y: 5, name: "Contractor" }
        ]
      }]
    });
      
    chart.render();
      }
  }
 
