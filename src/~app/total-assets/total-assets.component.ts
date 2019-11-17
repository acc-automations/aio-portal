import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { Colors } from 'ng2-charts';




@Component({
  selector: 'app-total-assets',
  templateUrl: './total-assets.component.html',
  styleUrls: ['./total-assets.component.scss']
})
export class TotalAssetsComponent   {
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
  public barChartColors: Colors[] = [
    { // grey
       backgroundColor: 'teal',
     // borderColor: 'green',
     // borderWidth: 2,
      pointBackgroundColor: 'green',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public barChartLabels: Label[] = ['Monitor', 'Ipad', 'Headset', 'Mobile Devices', 'Mac Systems', 'Projector', 'laptop', 'Mac', 'Iphone', 'Other'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
     { data: [100, 59, 80, 81, 56, 10,60, 10, 20, 50 ]  },          // label: 'Series A'
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
