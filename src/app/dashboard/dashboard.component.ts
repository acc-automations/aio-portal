import { MyHttpServiceService } from './../my-http-service.service';
import { TableListComponent } from './../../~app/table-list/table-list.component';
import { Http } from '@angular/http';
import { PiechartComponent} from 'app/piechart/piechart.component'
import { ReturnsJsonArrayService } from 'app/dashboard/returns-json-array.service';

import { Component, OnInit,Input  } from '@angular/core';
import * as Chartist from 'chartist';
import CanvasJS from 'canvasjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
   // finance variables
  private  allthevalues : any [];
  errorMessage:string;
  filterdropdownFinance = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","YTD","Forecast","Fiscal Year","EAC","CTD"]
  MonthFilter = "YTD";
  mySapRevenue;
  thisyear;
  fiscalyear:number;
  thismonth:number;
  fiscalmonth:number;
  YTDrevenue : string;
  YTDcontractcost:string;
  YTDCCI:number;
  YTDCCIpercentage:string;
  monthtype;
  extrathismonth;
  MMErevenue:string;
  MMEcontractcost:string;
  MMECCI:number;
  MmeCciPercent:string;
  SAPrevenue:string;
  SAPcontractcost:string;
  SAPCCI:number;
  SAPCciPercent:string;
  thismonthselected: number;
  ytdYear;
  ytdmonths; 
  yearFiscal;
  currentFinicialYear;
  today;
  totalFinalMME;
  MMErevenueActua;
  finalMME;
  MMEcontractcostActual;
  dynamic = 23;
// End of Finance variables

  //Employee module variables

  datas : any [];
  datadeal : any [];
  malecount: any;
  //errorMessage_Pi: any;
    femalecount: number;
    contractorCount: number;
    redepC: number;
    attritionCount: number;
    hipoattritionCount: number;
    redepCount: number;
    totalHc: number;
    seatUtilizationCount: number;
    seatUtilizationp: number;
    pyramidIndexCount: number;
    i: any [];
   //end of Employee PI variables

  constructor( private finianceService : MyHttpServiceService, private pie : ReturnsJsonArrayService, http : Http ) {
   
        this.thisyear = (new Date()).getFullYear();
        this.thismonth = (new Date()).getMonth();
        this.today = new Date();
        this.today.setMonth(8);
        let fiscalyear = "";
        
        // this.thismonthselected = this.thismonth -1;
        // this.ytdmonths = 'september ,2019';
        // const d = new Date("september , this.thisyear");
        // console.log(this.ytdmonths);
        // console.log( this.thismonth);
        // this.ytdYear = this.thismonth -1;
        // console.log(this.ytdYear);
      

       if(this.thismonthselected > 8){
              this.fiscalmonth = this.thismonth - 8;
              this.fiscalyear = this.thisyear + 1
              console.log(this.fiscalmonth);
       }

          else {
    
                this.fiscalmonth = this.thismonth + 4;
                this.fiscalyear = this.thisyear; 
                       
          };

          if ((this.today.getMonth() + 1) <= 7 ) {

            fiscalyear = "start" + " " + (this.today.getFullYear() - 1) + "-" + " " + "end" + this.today.getFullYear() 
            console.log(fiscalyear);
          } 
          
          else {
            fiscalyear = "start" + " " + this.today.getFullYear() + " "+ "-" + " " + "end" + " " + (this.today.getFullYear() + 1) 
            console.log(fiscalyear);
          }
        
     
  }
     
    
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

         
          
         
      

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);

      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);

      // Employee Module start
      this.pie.getPost().subscribe(res =>{

        this.datas =res;
        console.log(this.datas);

   this.femalecount = this.diversityfemale();
   this.malecount = this.diversitymale();
   this.contractorCount = this.contractor();
   this.attritionCount = this.attrition();
   this.hipoattritionCount = this.hipoattrition();
   this.redepCount = this.redep();
   this.totalHc = this.totalHeadcount();
   this.seatUtilizationCount = this.seatUtilization();
   this.seatUtilizationp = this.seatUtilizationpercentage();
  this.pyramidIndexCount = this.pyramidIndex();
  
    
   //this.getColor = this.getColor();
  
      }, error => this.errorMessage =<any>error);

      // this.pie.getPostdeal().subscribe(res =>{

      //   this.datadeal =res;
      //   console.log(this.datadeal);
  
      // }, error => this.errorMessage =<any>error);

//--------------------------- finance start -----------------

           this.finianceService.getPosts()
                .subscribe(res =>{
                  this.allthevalues = res;  
             },

              error => this.errorMessage = <any>error);          
  }

//   onpageloadtrigger(){
    
//     this.fiscalmonth = 2;
//     this.fiscalyear = this.thisyear;
//      //new lines
    
     
//      //MME VALUES
//      this.MMErevenue = this.allthevalues
//      .filter(mme => mme.section === 'MME' && mme.parentcategorynm === 'TotalRevenue' && mme.fiscalmonth == this.fiscalmonth && mme.fiscalyear == this.fiscalyear)
//        .map(mmeAmount => JSON.parse(mmeAmount.amount))
//          .reduce((a,b) => a+b);    

//          this.MMEcontractcost = this.allthevalues
//          .filter(mme => mme.section === 'MME' && mme.fiscalmonth == this.fiscalmonth && mme.fiscalyear == this.fiscalyear && mme.parentcategorynm === 'DirectCosts' ||  mme.parentcategorynm === 'OtherContractCosts')
//          .map(mmeAmount => JSON.parse(mmeAmount.amount))
//          .reduce((a,b) => a+b);

//            this.MMErevenue = JSON.stringify(Math.floor(JSON.parse(this.MMErevenue)/1000) + 1);
//            this.MMEcontractcost = JSON.stringify(Math.floor(JSON.parse(this.MMEcontractcost)/1000) + 1);
//            this.MMECCI = JSON.parse(this.MMErevenue) - JSON.parse(this.MMEcontractcost);
//            this.MmeCciPercent = JSON.stringify(this.MMECCI/100);
  
             
  
        
//          //SAP VALUES
//          this.SAPrevenue = this.allthevalues
//          .filter(mme => mme.section === 'SAP' && mme.parentcategorynm === 'TotalRevenue' && mme.fiscalmonth == this.fiscalmonth && mme.fiscalyear == this.fiscalyear)
//          .map(mmeAmount => JSON.parse(mmeAmount.amount))
//          .reduce((a,b) => a+b);
//            this.SAPcontractcost = this.allthevalues
//          .filter(mme => mme.section === 'SAP' && mme.fiscalmonth == this.fiscalmonth && mme.fiscalyear == this.fiscalyear && mme.parentcategorynm === 'DirectCosts' ||  mme.parentcategorynm === 'OtherContractCosts')
//          .map(mmeAmount => JSON.parse(mmeAmount.amount))
//          .reduce((a,b) => a+b);
//          this.MMErevenue = JSON.stringify(Math.floor(JSON.parse(this.MMErevenue)/1000) + 1);
//         this.MMEcontractcost = JSON.stringify(Math.floor(JSON.parse(this.MMEcontractcost)/1000) + 1);
//            this.SAPCCI = JSON.parse(this.SAPrevenue) - JSON.parse(this.SAPcontractcost);
//            this.SAPCciPercent = JSON.stringify(this.SAPCCI/100);
           
// }    

// Employee functions with logic
diversitymale(): number {
  
  var malecount = this.datas.filter(e=> e.Gender === 'Male').length;
  console.log(divers);
  var employee_status = this.datas.filter(e=> e.Employee_Status === 'Active').length;
 var emp_status = this.datas.filter(e => e.Employee_Status === 'Redep' ).length;
 var emp_status1_inactive = this.datas.filter(e => e.Employee_Status === 'Inactive -Resigned' && e.Gender === 'Male').length;
 
 var emp_status_inactive2 = this.datas.filter(e => e.Employee_Status === 'Inactive - redeployed' && e.Gender === 'Male').length;
 var emp_status_inactive3 = this.datas.filter(e => e.Employee_Status === 'Inactive - resigned/backfilled' && e.Gender === 'Male').length;
 var total_inactive = emp_status1_inactive + emp_status_inactive2 +emp_status_inactive3;

var totalActiveemp = employee_status+emp_status;
var totalfemalecount = malecount - total_inactive;

 var divers = totalfemalecount /  totalActiveemp * 100;
// console.log(divers);
     return divers; 
}

diversityfemale(): number {

//var femalecount = this.datas.filter(e=> e.Gender === 'Female').length;
  var femalecount = this.datas.filter(e=> e.Gender === 'Female').length;
  var employee_status = this.datas.filter(e=> e.Employee_Status === 'Active').length;
 var emp_status = this.datas.filter(e => e.Employee_Status === 'Redep' ).length;
 var emp_status1_inactive = this.datas.filter(e => e.Employee_Status === 'Inactive -Resigned' && e.Gender === 'Female').length;
 
 var emp_status_inactive2 = this.datas.filter(e => e.Employee_Status === 'Inactive - redeployed' && e.Gender === 'Female').length;
 //console.log(emp_status_inactive2);
 var emp_status_inactive3 = this.datas.filter(e => e.Employee_Status === 'Inactive - resigned/backfilled' && e.Gender === 'Female').length;
 var total_inactive = emp_status1_inactive + emp_status_inactive2 +emp_status_inactive3;
 
var totalActiveemp = employee_status+emp_status;
console.log(totalActiveemp);
var totalfemalecount = femalecount - total_inactive;
console.log();
 var divers_F = totalfemalecount /  totalActiveemp * 100;
 //console.log(divers_F);
 return divers_F; 
}

contractor(): number {

var resource_type_FTE = this.datas.filter(e=> e.Resource_type === 'FTE' && e.Employee_Status === 'Active').length;
console.log(resource_type_FTE);
  var total_redep =  this.datas.filter(e=> e.Resource_type === 'FTE' && e.Employee_Status === 'Redep').length;
  var total_hc = resource_type_FTE + total_redep;
console.log(total_hc);
var resource_type_Contractor = this.datas.filter(e=> e.Resource_type === 'Contractor' && e.Employee_Status === 'Active').length;
var total_redepC = this.datas.filter(e=> e.Resource_type === 'Contractor' && e.Employee_Status === 'Redep').length;
var total_hc1 = resource_type_Contractor + total_redepC;
console.log(total_hc1);

var total = total_hc + total_hc1;
console.log(total);

var totalcountEmp = total_hc + total_hc1;
var resource_count = ( total_hc1  / totalcountEmp ) * 100;
//console.log(resource_count);
return resource_count;

}

attrition(): number {

var hipo = this.datas.filter(e=> e.Attrition === 'HIPO').length;
//console.log(hipo);
var unmanaged = this.datas.filter(e=> e.Attrition === 'Unmanaged').length;
//console.log(unmanaged);
// && e.Employee_Status === 'Inactive -Resigned -backfilled' && e.Employee_Status === 'Redep' && e.Employee_Status === 'Inactive - redeployed'
var total_Active = this.datas.filter(e=> e.Employee_Status === 'Active').length;
  var total_redep =  this.datas.filter(e=> e.Employee_Status === 'Redep').length;
  var total_hc = total_Active + total_redep;

var AttritionPercentage = ((hipo + unmanaged) / (total_hc+ hipo + unmanaged)) * 100;
//console.log(AttritionPercentage);
return AttritionPercentage;

}

hipoattrition(): number {

var hipo = this.datas.filter(e=> e.Attrition === 'HIPO').length;
var unmanaged = this.datas.filter(e=> e.Attrition === 'Unmanaged').length;
//console.log(hipo);
//var unmanaged = this.datas.filter(e=> e.Attrition === 'Unmanaged').length;
//console.log(unmanaged);
// && e.Employee_Status === 'Inactive -Resigned -backfilled' && e.Employee_Status === 'Redep' && e.Employee_Status === 'Inactive - redeployed'
var total_Active = this.datas.filter(e=> e.Employee_Status === 'Active').length;
  var total_redep =  this.datas.filter(e=> e.Employee_Status === 'Redep').length;
  var total_hc = total_Active + total_redep;

 var hipoAttritionPercentage = ((hipo) / (total_hc+ hipo + unmanaged)) * 100;
 //console.log(hipoAttritionPercentage);
return hipoAttritionPercentage;

}

redep(): number{
  //var emp_status = this.datas.filter(e => e.Employee_Status === 'Redep' ).length;
  var total_Active = this.datas.filter(e=> e.Employee_Status === 'Active').length;
  var total_redep =  this.datas.filter(e=> e.Employee_Status === 'Redep').length;
  var total_hc = total_Active + total_redep;
  var redepPercentage = (total_redep / total_hc) * 100;
  

 // console.log(redepPercentage);

//   var getColor: string (redepPercentage: number)  => {
    
//     return redepPercentage > 0 ? "green" : "red";
//  }
  return redepPercentage ;

}

totalHeadcount(): number{

  var total_Active = this.datas.filter(e=> e.Employee_Status === 'Active').length;
  var total_redep =  this.datas.filter(e=> e.Employee_Status === 'Redep').length;
  var total_hc = total_Active + total_redep;
  return total_hc;
}

seatUtilization(): number{

  var totalSeatallocation = this.datas.filter(e=> e.Seat_Allocated === '1').length;

   return totalSeatallocation;

}

seatUtilizationpercentage(): number{

  var totalSeatallocation = this.datas.filter(e=> e.Seat_Allocated > 0).length;
  //console.log(totalSeatallocation);
  var total_Active = this.datas.filter(e=> e.Employee_Status === 'Active').length;
  var total_redep =  this.datas.filter(e=> e.Employee_Status === 'Redep').length;
  var total_hc = total_Active + total_redep;

  var seatp = (totalSeatallocation/total_hc);
     
  return seatp;

}

pyramidIndex(): number{

  var weight = 9;
  var totalPi = 0;
  var totalMult = 0;
  for(var i = 5; i<=13; i++){

  var pi = this.datas.filter(e=> e.Level === i.toString() && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length;
  //console.log(pi);
  
   totalPi = totalPi + pi;
  console.log(totalPi);
  if(weight>=1 && weight<=9){ 
   // console.log(pi);
   //console.log(this.datas.filter(e=> e.Level === i.toString()));
   // console.log("before" + weight);
    var mult = pi* weight;
    console.log("Multiplication" + mult);
    //console.log("After" +weight);
    
  }
  //console.log(" Outside Multiplication" + mult);
  totalMult = totalMult + mult;
  //console.log(totalMult);
  weight--;
  var division = totalMult / totalPi ;
 
  }
  console.log(totalPi);
  console.log(totalMult);
  // var piContractor = this.datas.filter(e=> e.Level === 'Contractor' && ( e.Employee_Status === 'Active' || e.Employee_Status === 'Redep')).length;
  //console.log(piContractor);
  // var multContractor = piContractor * 1;

  var resultPi = totalMult / totalPi;
 console.log(resultPi);

  var roundOf = resultPi.toFixed(2);
  console.log(resultPi);
  //console.log(roundOf);
  var numberRoundof= Number(roundOf);
  console.log(typeof numberRoundof );
    return numberRoundof;

}
//End of Employee functions logic

// Start of finance functions logic

handlechange(item){
  //console.log(this.allthevalues);
  this.fiscalmonth = 0;
  this.fiscalyear = 0; 
  if(JSON.parse(item) > 12){
   
    //SAPLINES
              //SAP VALUES  
              var fiscalyear = "";
              var month    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
              var today       = new Date();
              var dd = today.getDate(); 
            var mm = today.getMonth() + 1; 
            var yyyy = today.getFullYear(); 
            var Day = dd + '/' + mm + '/' + yyyy;
              console.log(Day);
            // Set start month of fiscal year
             // var start = today.setMonth(8);
             
            // var start = months[today.getMonth()];
            // console.log("Start:" + start);
            
            // set end month of fiscal year
            
            //today.setMonth(7);
            // var end = months[today.getMonth()]; 
            // console.log("End:" + end);
            //   console.log(today.getMonth());
              // if ((today.getMonth() + 1) <= 7 ) {
            
              //   console.log(today.getMonth());
             
              //   fiscalyear = start + " " + (today.getFullYear() - 1) + "-" + " " + end + today.getFullYear() 
              //   console.log(fiscalyear);
              // }  else {
              //   fiscalyear = start + " " + today.getFullYear() + " "+ "-" + " " + end + " " + (today.getFullYear() + 1) 
              //   console.log(fiscalyear);
              // }
              var currentMonth = today.getMonth();
            console.log(today.getMonth());
            // YTD - from sept - current month
            if(JSON.parse(item) ==13){
              this.SAPrevenue = this.allthevalues
              .filter(mme => mme.section === 'SAP' && mme.parentcategorynm === 'TotalRevenue' && ( (mme.fiscalyear == today.getFullYear() && (mme.fiscalmonth -1 <= currentMonth && mme.fiscalmonth -1 >= 8)) || (mme.fiscalyear == today.getFullYear() + 1 && (mme.fiscalmonth -1 <= currentMonth && mme.fiscalmonth -1 <= 7)) ) )
              .map(mmeAmount => JSON.parse(mmeAmount.amount))
              .reduce((a,b) => a+b);
    
            
                this.SAPcontractcost = this.allthevalues
                .filter(mme => mme.section === 'SAP' && (mme.parentcategorynm === 'DirectCosts' ||  mme.parentcategorynm === 'OtherContractCosts') && ( (mme.fiscalyear == today.getFullYear() && (mme.fiscalmonth -1 <= currentMonth && mme.fiscalmonth -1 >= 8)) || (mme.fiscalyear == today.getFullYear() + 1 && (mme.fiscalmonth -1 <= currentMonth && mme.fiscalmonth -1 <= 7)) ))
                .map(mmeAmount => JSON.parse(mmeAmount.amount))
                .reduce((a,b) => a+b);  
    
             // MME 
        
         this.MMErevenue = this.allthevalues
         .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  && ( (mme.FiscalYear == today.getFullYear() && (mme.months -1 <= currentMonth && mme.months -1 >= 8)) || (mme.FiscalYear == today.getFullYear() + 1 && (mme.months -1 <= currentMonth && mme.months -1 <= 7)) ))
         .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
          .reduce((a,b) => a+b);

              
         this.MMErevenueActua = this.allthevalues
         .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  && ( (mme.FiscalYear == today.getFullYear() && (mme.months -1 <= currentMonth && mme.months -1 >= 8)) || (mme.FiscalYear == today.getFullYear() + 1 && (mme.months -1 <= currentMonth && mme.months -1 <= 7)) ))
         .map(mmeAmount => JSON.parse(mmeAmount.Actual))
          .reduce((a,b) => a+b); 

        this.finalMME  = this.MMErevenue +  this.MMErevenueActua;
        console.log(this.finalMME);
//-----------------------------------------------------------------------------------------------------------------

          this.MMEcontractcost = this.allthevalues
         .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' && ( (mme.FiscalYear == today.getFullYear() && (mme.months -1 <= currentMonth && mme.months -1 >= 8)) || (mme.FiscalYear == today.getFullYear() + 1 && (mme.months -1 <= currentMonth && mme.months -1 <= 7)) ))
         .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
          .reduce((a,b) => a+b); 

          this.MMEcontractcostActual = this.allthevalues
         .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' && ( (mme.FiscalYear == today.getFullYear() && (mme.months -1 <= currentMonth && mme.months -1 >= 8)) || (mme.FiscalYear == today.getFullYear() + 1 && (mme.months -1 <= currentMonth && mme.months -1 <= 7)) ))
         .map(mmeAmount => JSON.parse(mmeAmount.Actual))
          .reduce((a,b) => a+b); 

         this.totalFinalMME =  this.MMEcontractcost + this.MMEcontractcostActual;

            }
            // current year  forecaste (current month - Aug 2020)
            else if( JSON.parse(item) ==14){
    
              this.SAPrevenue = this.allthevalues
              .filter(mme => mme.section === 'SAP' && mme.parentcategorynm === 'TotalRevenue' && ( (mme.fiscalyear == today.getFullYear() && mme.fiscalmonth -1 >= currentMonth ) || (mme.fiscalyear == today.getFullYear() + 1 && mme.fiscalmonth -1 >= currentMonth ) ) )
              .map(mmeAmount => JSON.parse(mmeAmount.amount))
              .reduce((a,b) => a+b);
    
            
                this.SAPcontractcost = this.allthevalues
                .filter(mme => mme.section === 'SAP' && (mme.parentcategorynm === 'DirectCosts' ||  mme.parentcategorynm === 'OtherContractCosts') && ( (mme.fiscalyear == today.getFullYear() && mme.fiscalmonth -1 >= currentMonth ) || (mme.fiscalyear == today.getFullYear() + 1 && mme.fiscalmonth -1 >= currentMonth ) ))
                .map(mmeAmount => JSON.parse(mmeAmount.amount))
                .reduce((a,b) => a+b);
    
              // this.MMErevenue = JSON.stringify(Math.floor(JSON.parse(this.MMErevenue)/1000) + 1);
              //   this.MMEcontractcost = JSON.stringify(Math.floor(JSON.parse(this.MMEcontractcost)/1000) + 1);
//MME
              this.MMErevenue = this.allthevalues
              .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  && ( (mme.FiscalYear == today.getFullYear() && mme.months -1 >= currentMonth ) || (mme.FiscalYear == today.getFullYear() + 1 && mme.months -1 >= currentMonth ) ))
              .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
               .reduce((a,b) => a+b); 

               this.MMErevenueActua = this.allthevalues
              .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  && ( (mme.FiscalYear == today.getFullYear() && mme.months -1 >= currentMonth ) || (mme.FiscalYear == today.getFullYear() + 1 && mme.months -1 >= currentMonth ) ))
              .map(mmeAmount => JSON.parse(mmeAmount.Actual))
               .reduce((a,b) => a+b); 

               this.finalMME = this.MMErevenue +  this.MMErevenueActua
 //--------------------------------------------------------------------------------------

               this.MMEcontractcost = this.allthevalues
              .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' && ((mme.FiscalYear == today.getFullYear() && mme.months -1 >= currentMonth ) || (mme.FiscalYear == today.getFullYear() + 1 && mme.months -1 >= currentMonth ) ))
              .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
               .reduce((a,b) => a+b); 

               
               this.MMEcontractcostActual = this.allthevalues
              .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' && ((mme.FiscalYear == today.getFullYear() && mme.months -1 >= currentMonth ) || (mme.FiscalYear == today.getFullYear() + 1 && mme.months -1 >= currentMonth ) ))
              .map(mmeAmount => JSON.parse(mmeAmount.Actual))
               .reduce((a,b) => a+b);
     
               this.totalFinalMME =  this.MMEcontractcost + this.MMEcontractcostActual;

            }
    // current year (1st Sept 19 - Aug 2020)
            else if( JSON.parse(item) ==15){
              this.SAPrevenue = this.allthevalues
              .filter(mme => mme.section === 'SAP' && mme.parentcategorynm === 'TotalRevenue' && ( (mme.fiscalyear == today.getFullYear() && mme.fiscalmonth -1 >= 8) || (mme.fiscalyear == today.getFullYear() + 1 &&  mme.fiscalmonth -1 <= 7) ) )
              .map(mmeAmount => JSON.parse(mmeAmount.amount))
              .reduce((a,b) => a+b);
    
            
                this.SAPcontractcost = this.allthevalues
                .filter(mme => mme.section === 'SAP' && (mme.parentcategorynm === 'DirectCosts' ||  mme.parentcategorynm === 'OtherContractCosts') && ( (mme.fiscalyear == today.getFullYear() && mme.fiscalmonth -1 >= 8) || (mme.fiscalyear == today.getFullYear() + 1 &&  mme.fiscalmonth -1 <= 7) ))
                .map(mmeAmount => JSON.parse(mmeAmount.amount))
                .reduce((a,b) => a+b);
    
              this.MMErevenue = JSON.stringify(Math.floor(JSON.parse(this.MMErevenue)/1000) + 1);
                this.MMEcontractcost = JSON.stringify(Math.floor(JSON.parse(this.MMEcontractcost)/1000) + 1);
    
                // this.SAPCCI = JSON.parse(this.SAPrevenue) - JSON.parse(this.SAPcontractcost);
                // this.SAPCciPercent = JSON.stringify(this.SAPCCI/100);

                //---------------------------------MME--------------------------------------

                this.MMErevenue = this.allthevalues
                .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  && ( (mme.FiscalYear == today.getFullYear() && mme.months -1 >= 8) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months -1 <= 7) ))
                .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
                 .reduce((a,b) => a+b); 

                 this.MMErevenueActua = this.allthevalues
                 .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  && ( (mme.FiscalYear == today.getFullYear() && mme.months -1 >= 8) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months -1 <= 7) ))
                 .map(mmeAmount => JSON.parse(mmeAmount.Actual))
                  .reduce((a,b) => a+b);

                  this.finalMME  = this.MMErevenue +  this.MMErevenueActua;

    //------------------------------------------------------------------------   
                 this.MMEcontractcost = this.allthevalues
                .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' && ((mme.FiscalYear == today.getFullYear() && mme.months -1 >= 8) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months -1 <= 7) ))
                .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
                 .reduce((a,b) => a+b); 

                 this.MMEcontractcostActual = this.allthevalues
                 .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' && ((mme.FiscalYear == today.getFullYear() && mme.months -1 >= 8) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months -1 <= 7) ))
                 .map(mmeAmount => JSON.parse(mmeAmount.Actual))
                  .reduce((a,b) => a+b);    
       
                  this.totalFinalMME =  this.MMEcontractcost + this.MMEcontractcostActual;
            }
            // EAC - for complete contract tenure (start to end)
            else if( JSON.parse(item) ==16){
    
              this.SAPrevenue = this.allthevalues
              .filter(mme => mme.section === 'SAP' && mme.parentcategorynm === 'TotalRevenue' && mme.Contract_Start_Date >= mme.Contract_End_Date   )
              .map(mmeAmount => JSON.parse(mmeAmount.amount))
              .reduce((a,b) => a+b);
    
                this.SAPcontractcost = this.allthevalues
                .filter(mme => mme.section === 'SAP' && (mme.parentcategorynm === 'DirectCosts' ||  mme.parentcategorynm === 'OtherContractCosts') && mme.Contract_Start_Date >= mme.Contract_End_Date)
                .map(mmeAmount => JSON.parse(mmeAmount.amount))
                .reduce((a,b) => a+b);

                
                //MME

                this.MMErevenue = this.allthevalues
                .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  &&  mme.Contract_Start_Date >= mme.Contract_End_Date)
                .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
                 .reduce((a,b) => a+b); 

                 this.MMErevenueActua = this.allthevalues
                 .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  &&  mme.Contract_Start_Date >= mme.Contract_End_Date)
                 .map(mmeAmount => JSON.parse(mmeAmount.Actual))
                  .reduce((a,b) => a+b); 

                  this.finalMME  = this.MMErevenue + this.MMErevenueActua
       //-----------------------------------------------------------------------------------------------
                 this.MMEcontractcost = this.allthevalues
                .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' && mme.Group === 'ContractCI' && mme.Contract_Start_Date >= mme.Contract_End_Date)
                .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
                 .reduce((a,b) => a+b); 

                 this.MMEcontractcostActual = this.allthevalues
                 .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' && mme.Group === 'ContractCI' && mme.Contract_Start_Date >= mme.Contract_End_Date)
                 .map(mmeAmount => JSON.parse(mmeAmount.Actual))
                  .reduce((a,b) => a+b); 
       
                  this.totalFinalMME =  this.MMEcontractcost + this.MMEcontractcostActual;

    
            }
            // CTD - actual from contract start date - till date
            else{
    
              this.SAPrevenue = this.allthevalues
              .filter(mme => mme.section === 'SAP' && mme.parentcategorynm === 'TotalRevenue' && mme.Contract_Start_Date >= Day   )
              .map(mmeAmount => JSON.parse(mmeAmount.amount))
              .reduce((a,b) => a+b);
    
            
                this.SAPcontractcost = this.allthevalues
                .filter(mme => mme.section === 'SAP' && (mme.parentcategorynm === 'DirectCosts' ||  mme.parentcategorynm === 'OtherContractCosts') && mme.Contract_Start_Date >= Day )
                .map(mmeAmount => JSON.parse(mmeAmount.amount))
                .reduce((a,b) => a+b);

               //MME

               this.MMErevenue = this.allthevalues
               .filter(mme => mme.Section === 'MME'  && mme.Group === 'TotalRevenue' && mme.Contract_Start_Date >= Day)
               .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
                .reduce((a,b) => a+b); 

                this.MMErevenueActua = this.allthevalues
               .filter(mme => mme.Section === 'MME'  && mme.Group === 'TotalRevenue' && mme.Contract_Start_Date >= Day)
               .map(mmeAmount => JSON.parse(mmeAmount.Actual))
                .reduce((a,b) => a+b);

                this.finalMME  = this.MMErevenue + this.MMErevenueActua;
      //---------------------------------------------------------------------------------------------------------
                this.MMEcontractcost = this.allthevalues
               .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' && mme.Group === 'ContractCI' && mme.Contract_Start_Date >= Day)
               .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
                .reduce((a,b) => a+b); 

                this.MMEcontractcostActual = this.allthevalues
               .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' && mme.Group === 'ContractCI' && mme.Contract_Start_Date >= Day)
               .map(mmeAmount => JSON.parse(mmeAmount.Actual))
                .reduce((a,b) => a+b);
      
                this.totalFinalMME =  this.MMEcontractcost + this.MMEcontractcostActual;

            }
    
      }
    
    
  
  else { 
    //FOR Months
      if(JSON.parse(item) > 8){
        // this.fiscalmonth = JSON.parse(item) - 8;
        // this.fiscalyear = this.thisyear - 1;
        // console.log(this.fiscalmonth);
        // console.log(this.fiscalyear);

        var fiscalyear = "";
              var monthss    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
              var today       = new Date();
         
            //SAP VALUES
            this.SAPrevenue = this.allthevalues
            .filter(mme => mme.section === 'SAP' && mme.parentcategorynm === 'TotalRevenue' && mme.fiscalmonth == this.fiscalmonth && mme.fiscalyear == this.fiscalyear)
            .map(mmeAmount => JSON.parse(mmeAmount.amount))
            .reduce((a,b) => a+b);
              this.SAPcontractcost = this.allthevalues
            .filter(mme => mme.section === 'SAP' && mme.fiscalmonth == this.fiscalmonth && mme.fiscalyear == this.fiscalyear && (mme.parentcategorynm === 'DirectCosts' ||  mme.parentcategorynm === 'OtherContractCosts'))
             
             .map(mmeAmount => JSON.parse(mmeAmount.amount))
             .reduce((a,b) => a+b);
          
             //MME  && mme.fiscalmonth == this.fiscalmonth && mme.fiscalyear == this.fiscalyear)
             // ((mme.FiscalYear == today.getFullYear() && mme.months -1 >= 8) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months -1 <= 7) ))
             this.MMErevenue = this.allthevalues
             .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue' && ((mme.FiscalYear == today.getFullYear() && mme.months -1 == item) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months -1 == item) ))
             .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
              .reduce((a,b) => a+b); 

              this.MMErevenueActua = this.allthevalues
             .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue' && ((mme.FiscalYear == today.getFullYear() && mme.months -1 == item) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months -1== item) ))
             .map(mmeAmount => JSON.parse(mmeAmount.Actual))
              .reduce((a,b) => a+b);

              this.finalMME  = this.MMErevenue + this.MMErevenueActua;
   //-------------------------------------------------------------------------------- 
              this.MMEcontractcost = this.allthevalues
             .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost'  && ((mme.FiscalYear == today.getFullYear() && mme.months -1 == item) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months -1 == item) ))
             .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
              .reduce((a,b) => a+b); 

              this.MMEcontractcostActual = this.allthevalues
              .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  && ((mme.FiscalYear == today.getFullYear() && mme.months -1 == item) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months -1 == item) ))
              .map(mmeAmount => JSON.parse(mmeAmount.Actual))
               .reduce((a,b) => a+b);   
    
               this.totalFinalMME =  this.MMEcontractcost + this.MMEcontractcostActual;

      }else{

        
        console.log(JSON.parse(item));
        console.log(item);
        this.fiscalmonth = JSON.parse(item) + 4;
        this.fiscalyear = this.thisyear;
        console.log(this.thisyear);
         //new lines
         var fiscalyear = "";
         var monthss    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
         var today       = new Date();
                                    
             //SAP VALUES
             this.SAPrevenue = this.allthevalues
             .filter(mme => mme.section === 'SAP' && mme.parentcategorynm === 'TotalRevenue' && mme.fiscalmonth == this.fiscalmonth && mme.fiscalyear == this.fiscalyear)
             .map(mmeAmount => JSON.parse(mmeAmount.amount))
             .reduce((a,b) => a+b);
              this.SAPcontractcost = this.allthevalues
             .filter(mme => mme.section === 'SAP' && mme.fiscalmonth == this.fiscalmonth && mme.fiscalyear == this.fiscalyear && ( mme.parentcategorynm === 'DirectCosts' ||  mme.parentcategorynm === 'OtherContractCosts'))
             .map(mmeAmount => JSON.parse(mmeAmount.amount))
             .reduce((a,b) => a+b);
          
              //MME

              this.MMErevenue = this.allthevalues
              .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  && ((mme.FiscalYear == today.getFullYear() && mme.months == item) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months == item) ))
              .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
               .reduce((a,b) => a+b); 

               this.MMErevenueActua = this.allthevalues
               .filter(mme => mme.Section === 'MME' && mme.Group === 'TotalRevenue'  && ((mme.FiscalYear == today.getFullYear() && mme.months == item) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months == item) ))
               .map(mmeAmount => JSON.parse(mmeAmount.Actual))
                .reduce((a,b) => a+b);

                this.finalMME  = this.MMErevenue + this.MMErevenueActua;
    //------------------------------------------------------------------------------------------

               this.MMEcontractcost = this.allthevalues
              .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' &&  ((mme.FiscalYear == today.getFullYear() && mme.months == item) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months == item) ))
              .map(mmeAmount => JSON.parse(mmeAmount.Forecast))
               .reduce((a,b) => a+b);
               
               this.MMEcontractcostActual = this.allthevalues
              .filter(mme => mme.Section === 'MME' &&  mme.Group === 'TotalCost' &&  ((mme.FiscalYear == today.getFullYear() && mme.months == item) || (mme.FiscalYear == today.getFullYear() + 1 &&  mme.months == item) ))
              .map(mmeAmount => JSON.parse(mmeAmount.Actual))
               .reduce((a,b) => a+b);
     
               this.totalFinalMME =  this.MMEcontractcost + this.MMEcontractcostActual;

        
               
      }
      
  }
  // if(JSON.parse(item) == 13){
     
  //   this.SAPrevenue = this.allthevalues
  //   .filter(mme => mme.section === 'SAP' && mme.parentcategorynm === 'TotalRevenue' && mme.fiscalyear == this.fiscalyear && mme.fiscalmonth >= this.fiscalmonth &&  mme.fiscalmonth <= this.fiscalmonth)
  //   .map(mmeAmount => JSON.parse(mmeAmount.amount))
  //   .reduce((a,b) => a+b);
  //     this.SAPcontractcost = this.allthevalues
  //     .filter(mme => mme.section === 'SAP' && mme.fiscalyear == this.fiscalyear && mme.fiscalmonth >= this.fiscalmonth &&  mme.fiscalmonth <= this.fiscalmonth  && (mme.parentcategorynm === 'DirectCosts' ||  mme.parentcategorynm === 'OtherContractCosts'))
  //     .map(mmeAmount => JSON.parse(mmeAmount.amount))
  //     .reduce((a,b) => a+b);
  //   this.MMErevenue = JSON.stringify(Math.floor(JSON.parse(this.MMErevenue)/1000) + 1);
  //     this.MMEcontractcost = JSON.stringify(Math.floor(JSON.parse(this.MMEcontractcost)/1000) + 1);
  //     this.SAPCCI = JSON.parse(this.SAPrevenue) - JSON.parse(this.SAPcontractcost);
  //     this.SAPCciPercent = JSON.stringify(this.SAPCCI/100);

  // }

}

         
  
}

