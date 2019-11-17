import { IssueBreakdownComponent } from './../../issue-breakdown/issue-breakdown.component';
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

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { FinanceSkillGraphComponent } from 'app/finance-graph/finance-skill-graph.component';
import { TotalAssetsComponent } from 'app/total-assets/total-assets.component';
import { MyHttpServiceService } from 'app/my-http-service.service';
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
    FusionChartsModule

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
    IssueBreakdownComponent,
    TotalAssetsComponent
    
  ],
providers:[MyHttpServiceService]

})

export class AdminLayoutModule {}
