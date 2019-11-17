import { NgModule, Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxChartModule } from 'devextreme-angular';

import { MaleAgeStructure, Service } from './issue-breakdown.service';

  // if(!/localhost/.test(document.location.host)) {
  //     enableProdMode();
  // }
@Component({
  selector: 'app-issue-breakdown',
  templateUrl: './issue-breakdown.component.html',
  styleUrls: ['./issue-breakdown.component.scss'],
  providers: [Service]
})
export class IssueBreakdownComponent {
    dataSource: MaleAgeStructure[];

    constructor(service: Service) {
        this.dataSource = service.getMaleAgeData();
    }

    customizeTooltip(arg: any) {
        return {
            text: arg.seriesName + ' years: ' + arg.valueText
        };
    }
}


