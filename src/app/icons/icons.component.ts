import { Component, OnInit,OnDestroy  } from '@angular/core';
import { MyHttpServiceService } from '../my-http-service.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
  providers: [MyHttpServiceService]
})
export class IconsComponent implements OnInit {

  
    private  filterData : any [];
    subscription: Subscription;
    
    totalSapRevenue;  
    totalSapContractCost;
    totalSapCci;
    totalSapCcipercent;
    totalMmeRevenue ;
    totalMmeContractCost;
    totalMmeCci;
    totalMmeCciPercent;
    totalVarienceRevenue;
    toalVarienceContractCost;
    totalVarienceCci;
    totalVarienceCciPercent;
    totalCCIExpRevenue;
    totalCCIExpContractCci;
    totalCCIExpContractCcipercent;
    totalTargetCCIPercent;
    totalTargetContractCci;
    totalFiscalRevenue;
    totalFiscalContractCci;
    totalFiscalContractCCipercent;
    totalGapContractCci;
    totalGapContractCciPercent;
    thisyear;
    thismonth;
    thisYearSelected;
    thismonthselected;
    

    ytdYear;
    ytdmonths; 
    yearFiscal;
    currentFinicialYear;
    today

    constructor( private _service : MyHttpServiceService) {
    
      // this.thisyear = (new Date()).getFullYear();
      // this.thismonth = (new Date()).getMonth();
      // this.thisYearSelected = this.thisyear + 1;
      
      // this.thismonthselected = this.thismonth -1;
      // this.ytdmonths = 'september ,2019';
      // const d = new Date("september , this.thisyear");
  
      this.thisyear = (new Date()).getFullYear();
      this.thismonth = (new Date()).getMonth();
      this.today = new Date();

      this.today.setMonth(8);
      let fiscalyear = "";
      var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      var today  = new Date();

      // Set start month of fiscal year
       this.today.setMonth(8);

      var start = months[today.getMonth()];

      // set end month of fiscal year

      this.today.setMonth(7);

      var end = months[today.getMonth()]; 
      

      //---------------------------------- fisacal year ------------------------------------------

      if ((this.today.getMonth() + 1) <= 7 ) {

       // fiscalyear = (this.today.getFullYear() - 1) + "-"  + this.today.getFullYear()
       fiscalyear = start + " " + (today.getFullYear() - 1) + "-" + " " + end + today.getFullYear() 
        console.log(fiscalyear);
      } 
      
      else {
        //fiscalyear =  this.today.getFullYear() + " "+ "-" + (this.today.getFullYear() + 1) 
        fiscalyear = start + " " + today.getFullYear() + " "+ "-" + " " + end + " " + (today.getFullYear() + 1) 
        console.log(fiscalyear);
      }
    


    }  

  ngOnInit() {
  
  this._service.getPosts()
  .subscribe(res=>{this.filterData = res;
     //console.log(this.filterData)

     
   // ----------------------------------------------SAP Start Here------------------------------------------------------------

   this.totalSapRevenue = this.filterData
         .filter(sap => sap.section === 'SAP' && sap.parentcategorynm === 'TotalRevenue' && sap.monthyear === 'May2019'  )
          .map(sapAmount => JSON.parse(sapAmount.amount))
           .reduce((a,b) => a+b); 
           console.log(this.totalSapRevenue)
            
        

    this.totalSapContractCost = this.filterData
                             .filter(contractCost => contractCost.section === 'SAP' && contractCost.monthyear === 'May2019' &&  (contractCost.parentcategorynm === "DirectCosts" || contractCost.parentcategorynm === 'OtherContractCosts')) 
                                 .map(contractAmount =>JSON.parse(contractAmount.amount))
                                 .reduce((a,b) => a+b);  
                                console.log(this.totalSapContractCost)           

      this.totalSapCci = this.totalSapRevenue - this.totalSapContractCost;  
      console.log(this.totalSapCci)      
      this.totalSapCcipercent = this.totalSapCci / this.totalSapRevenue * 100 ;   
      console.log(this.totalSapCcipercent)      
           
           
    // ---------------------------------------------- MME Start Here ------------------------------------------------------------

     this.totalMmeRevenue = this.filterData
     .filter(mme =>mme.ForecastVersion === 'TotalRevenue')      
        .map(mmeAmount =>mmeAmount.May19)
         console.log(this.totalMmeRevenue)
     
    
   
       this.totalMmeContractCost =  this.filterData
           .filter(mmeContractCost=> mmeContractCost.ForecastVersion ==='TotalCosts' )                            
             .map(mmContractAmount => mmContractAmount.May19)
              console.log( this.totalMmeContractCost) 
             
           this.totalMmeCci = this.totalMmeRevenue - this.totalMmeContractCost; 
          // console.log(this.totalMmeCci)    
           this.totalMmeCciPercent =    this.totalMmeCci / this.totalMmeRevenue * 100;     
          // console.log(this.totalMmeCciPercent)  
        
     //  --------------------------------------------------Varience start here--------------------------------------------------------------------------------------------
    
      this.totalVarienceRevenue = this.totalMmeRevenue - this.totalSapRevenue ;
         
      this.toalVarienceContractCost = this.totalMmeContractCost - this.totalSapContractCost;
      
      this.totalVarienceCci = this.totalMmeCci - this.totalSapCci;

      this.totalVarienceCciPercent = this.totalVarienceCci / this.totalVarienceRevenue * 100;    


        //-------------------------CCI Expension------------------------------------------------------------------------------------------------------

     this.totalCCIExpRevenue =   this.filterData
     .filter(cciExp => cciExp.ForecastVersion === 'TotalRevenue')
       .map(cciExp=> cciExp.May18)
        .reduce((a,b)=>a+b); 
        console.log(this.totalCCIExpRevenue)

         
          
          
     //------------------------contract CCI ----------------------------------------------------------------------------------------------------------

     this.totalCCIExpContractCci = this.filterData
          .filter(contractCCI => contractCCI.ForecastVersion === 'TotalCosts')
           .map(contractCCI=> contractCCI.May18)
            .reduce((a,b)=>a+b);
        

     //------------------------------------------contract CC%----------------------------------------------------------------------
  
        this.totalCCIExpContractCcipercent =  this.totalCCIExpContractCci / this.totalCCIExpRevenue * 100


   //-------------------Target CCI% --------------------------------------------------------------------------------------------------------------


             this.totalTargetCCIPercent = this.totalCCIExpContractCcipercent + 0.007;

  // -------------------------------------------- contract cci -----------------------------------------------------------------------------------

             this.totalTargetContractCci = this.totalCCIExpContractCci +(this.totalCCIExpContractCci * 0.007);   



  //--------------------fisacal year--------------------------------------------------------------------------------------------------------------
      
         
    this.totalFiscalRevenue = this.filterData
                                   .filter(fiscalRevenue => fiscalRevenue.section ==='MME' && fiscalRevenue.fiscalyear ==='2018' && fiscalRevenue.parentcategorynm === 'TotalRevenue' )
                                    .map(fiscalRevenue => JSON.parse(fiscalRevenue.amount))
                                     .reduce((a,b)=>a+b)
                                     //console.log(this.totalFiscalRevenue)


 //----------------contract CCI ----------------------------------------------------------------------

      this.totalFiscalContractCci = this.filterData
                                         .filter(contractCci => contractCci.section === 'MME' &&  contractCci.fiscalyear ==='2018'  &&  contractCci.parentcategorynm === 'OtherContractCosts')
                                          .map(contractCci => JSON.parse(contractCci.amount))
                                           .reduce((a,b)=>a+b);
                                          // console.log(this.totalFiscalContractCci)


//---------------------contract CCI% --------------------------------------------------------------------------

              this.totalFiscalContractCCipercent =     this.totalFiscalContractCci /this.totalFiscalRevenue *100 

 //------------------------------- GAP contract CCI ---------------------------------------------------------



                         this.totalGapContractCci  = this.totalTargetContractCci - this.totalFiscalContractCci 
                         
                         
 //---------------------   GAP contract CCI%-------------------------------------------------------------------------------
 
             this.totalGapContractCciPercent  = this.totalTargetCCIPercent -  this.totalFiscalContractCCipercent
                                          
  })}

 
}


