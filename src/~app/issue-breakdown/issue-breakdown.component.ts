import { Component, OnInit,ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions,ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
 

@Component({
  selector: 'app-issue-breakdown',
  templateUrl: './issue-breakdown.component.html',
  styleUrls: ['./issue-breakdown.component.scss']
})
export class IssueBreakdownComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      // xAxes: [{
      //     barPercentage: 0.5,
      //     barThickness: 6,
      //     maxBarThickness: 8,
      //     minBarLength: 2,
      //     gridLines: {
      //         offsetGridLines: false
      //     }
      // }]
      xAxes: [{
        stacked: true
    }],
    yAxes: [{
        stacked: false
    }]
  },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  // public barChartLabels: Label[] = ['Monitor', 'Ipad', 'Headset'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartData: ChartDataSets[] = [
    { data: [2]  },          // label: 'Series A'
    { data: [6] },          //, label: 'Series B'
    { data: [9] }            //, label: 'Series c'
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
    for (let i = 0; i < this.barChartData.length; i++) {
      for (let j = 0; j < this.barChartData[i].data.length; j++) {
        this.barChartData[i].data[j] = this.generateNumber(i);
      }
    }
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 3 ? 10 : 100)) + 1);
  }

}
