import {  Http } from '@angular/http';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { SafePropertyRead } from '@angular/compiler';
import { MyHttpServiceService } from 'app/my-http-service.service';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit  { 
 public posts : any[];
  
  
  totalSapRevenue;
  totalSapContractCost;
  totalSapCci;
  totalSapCcipercent;
  totalMmeRevenue;
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
  totalActualRevenue;
  totalActualCOntractCci;
  totalActualfiscal;


  
constructor(private service : MyHttpServiceService) { 
    
    
        
}

ngOnInit(){
 
    
             
  }
      
}