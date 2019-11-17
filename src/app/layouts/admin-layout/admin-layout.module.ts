
import { MyHttpServiceService } from './../../my-http-service.service';
import { ReturnsJsonArrayService } from 'app/dashboard/returns-json-array.service';

import { CertificationSkillsGraphComponent } from './../../certification-skills-graph/certification-skills-graph.component';
 
import { DealPerformanceComponent } from './../../deal-performance/deal-performance.component';
import { PiechartComponent } from 'app/piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";
import { DxChartModule } from 'devextreme-angular';

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import { FinanceSkillGraphComponent } from 'app/finance-graph/finance-skill-graph.component';
import { TotalAssetsComponent } from 'app/total-assets/total-assets.component';
import { IssueBreakdownComponent } from 'app/issue-breakdown/issue-breakdown.component';
import { HttpClientModule } from '@angular/common/http';
import { FinanceComponent } from 'app/finance/finance.component';
import { InternaltoolComponent } from 'app/internaltool/internaltool.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { LeadershipDashboardComponent } from 'app/leadership-dashboard/leadership-dashboard.component';
import { ModulesComponent } from 'app/modules/modules.component';
import { ReportComponent } from 'app/report/report.component';
import { WeAtAccentureComponent } from 'app/we-at-accenture/we-at-accenture.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ChartsModule,
    FusionChartsModule,
    DxChartModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule
    
    
    
    

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PiechartComponent, 
    DealPerformanceComponent,
    FinanceSkillGraphComponent,
    CertificationSkillsGraphComponent,
    TotalAssetsComponent,
    IssueBreakdownComponent,
    FinanceComponent,
    InternaltoolComponent,
    LeadershipDashboardComponent,
    ModulesComponent,
    ReportComponent,
    WeAtAccentureComponent 
    
    
  ],

  providers: [
    MyHttpServiceService,
    ReturnsJsonArrayService
  ],
})

export class AdminLayoutModule {}
