import { Component, OnInit,ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions,ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
 

@Component({
  selector: 'app-certification-skills-graph',
  templateUrl: './certification-skills-graph.component.html',
  styleUrls: ['./certification-skills-graph.component.scss']
})
export class CertificationSkillsGraphComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Campaign', 'Angular', 'AEM', 'Scrum', 'Analytics', 'Eloqua', 'UI/UX'];
  public barChartColors: Color[] = [
    { // grey
       backgroundColor: '#8e7aa3',
     // borderColor: 'green',
     // borderWidth: 2,
      pointBackgroundColor: '#8e7aa3',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
     { data: [4, 2, 5, 2, 2, 3,2 ]  },          // label: 'Series A'
   // { data: [58, 48, 40, 19, 80, 27, 90] }            //, label: 'Series B'
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }


}
