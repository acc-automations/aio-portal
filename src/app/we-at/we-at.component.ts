import { Component, OnInit }  from '@angular/core';
import { WeAtService }        from '../services/we-at.service';
import { WeAt }               from './we-at-schema';
import { WeAt_PF }            from './we-at-pf-schema';
import { WeAt_RF } from '../we-at/we-at-rf-schema';
import { WeAt_IA } from '../we-at/we-at-ia-schema';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { element } from 'protractor';
import { isEmpty } from 'rxjs-compat/operator/isEmpty';

@Component({
  selector    : 'app-we-at',
  templateUrl : './we-at.component.html',
  styleUrls   : ['./we-at.component.scss'],
  providers   : [WeAtService],
})

export class WeAtComponent implements OnInit {

  
  IA_file:File;
  RF_file:File;
  PF_file:File;
  upload_resp_ia: string;
  upload_resp_rf: string;
  upload_resp_pf: string;
  //OG_wise_data_pf: any={data:[]};
  //location_wise_data_pf: any={data:[]};
  //OG_wise_data_rf: any={data:[]};
  //location_wise_data_rf: any={data:[]};
  //OG_wise_data_ia: any={data:[]};
  //location_wise_data_ia: any={data:[]};

  OG_wise_data_rf = new Object();
  location_wise_data_rf = new Object();
  OG_wise_data_ia = new Object();
  location_wise_data_ia = new Object();
  OG_wise_data_pf = new Object();
  location_wise_data_pf = new Object();

  incomingIAfile(event){
    this.IA_file= event.target.files[0]; 
  }
  incomingRFfile(event){
    this.RF_file= event.target.files[0]; 
  }
  incomingPFfile(event){
    this.PF_file= event.target.files[0]; 
  }

  Upload(sheet_name) {
    
     
    
    
    
    

    switch (sheet_name) {
      case "Idea Aging Raw Data": {
        this.upload_resp_ia = "processing...";
        
        let arrayBuffer:any="";
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
    
          arrayBuffer = fileReader.result;
          console.log(arrayBuffer);
          let data = new Uint8Array(arrayBuffer);
          let arr = new Array();
    
          for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    
          let bstr = arr.join("");
          let workbook = XLSX.read(bstr, { type: "binary" });
          let worksheet = workbook.Sheets[sheet_name];
          let Json = XLSX.utils.sheet_to_json(worksheet, { raw: true });

          this.upload_resp_ia="Processed "+Json.length+" records!"

          this.OG_wise_data_ia = {};
          this.location_wise_data_ia = {};

          this.ia_calculate(Json);

          console.log(this.location_wise_data_ia);
          console.log(this.OG_wise_data_ia);

        }
        fileReader.readAsArrayBuffer(this.IA_file);
        
        break;
      }
      case "PerformanceSummaryReport": {
        this.upload_resp_pf = "processing...";



        
        let arrayBuffer:any="";

        let fileReader = new FileReader();
        fileReader.onload = (e) => {
    
          arrayBuffer = fileReader.result;
          console.log(arrayBuffer);
          let data = new Uint8Array(arrayBuffer);
          let arr = new Array();
    
          for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    
          let bstr = arr.join("");
          let workbook = XLSX.read(bstr, { type: "binary" });
          let worksheet = workbook.Sheets[sheet_name];
          let Json = XLSX.utils.sheet_to_json(worksheet, { raw: true });

          this.upload_resp_pf="Processed "+Json.length+" records!"

          this.OG_wise_data_pf = {};
          this.location_wise_data_pf = {};

          this.pf_calculate(Json);

          console.log(this.location_wise_data_pf);
          console.log(this.OG_wise_data_pf);

        }
        fileReader.readAsArrayBuffer(this.PF_file);




        break;
      }
      case "RedFlaggedReport": {
        
        this.upload_resp_rf = "processing...";
        let arrayBuffer:any="";

        let fileReader = new FileReader();
        fileReader.onload = (e) => {
    
          arrayBuffer = fileReader.result;
          console.log(arrayBuffer);
          let data = new Uint8Array(arrayBuffer);
          let arr = new Array();
    
          for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    
          let bstr = arr.join("");
          let workbook = XLSX.read(bstr, { type: "binary" });
          let worksheet = workbook.Sheets[sheet_name];
          let Json = XLSX.utils.sheet_to_json(worksheet, { raw: true });

          this.upload_resp_rf="Processed "+Json.length+" records!"

          this.OG_wise_data_rf = {};
          this.location_wise_data_rf = {};

          this.rf_calculate(Json);

          console.log(this.location_wise_data_rf);
          console.log(this.OG_wise_data_rf);

        }
        fileReader.readAsArrayBuffer(this.RF_file);


        break;
      }
      default: {
        break;
      }
    } 

  //   let fileReader = new FileReader();
  //   fileReader.onload = (e) => {

  //     this.arrayBuffer = fileReader.result;
  //     var data = new Uint8Array(this.arrayBuffer);
  //     var arr = new Array();

  //     for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);

  //     var bstr = arr.join("");
  //     var workbook = XLSX.read(bstr, { type: "binary" });
  //     var worksheet = workbook.Sheets[sheet_name];
  //     let Json = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      
  //     switch(sheet_name) { 
  //       // case "Idea Aging Raw Data": { 
  //       //   this.upload_resp_ia="Processed "+Json.length+" records!"

  //       //   this.OG_wise_data_ia = {};
  //       //   this.location_wise_data_ia = {};

  //       //   this.ia_calculate(Json);

  //       //   console.log(this.location_wise_data_ia);
  //       //   console.log(this.OG_wise_data_ia);
        
  //       //   break; 
  //       // } 

  //       case "PerformanceSummaryReport": { 
          
  //         this.upload_resp_pf="Processed "+Json.length+" records!";
          
  //           let OG       = Array.from(new Set(Json.map(Json => Json["Master Client Name"])));
  //           let Location = Array.from(new Set(Json.map(Json => Json["Location"])));
            
  //           this.OG_wise_data_pf.data=[];
  //           OG.forEach((element) => {

  //             let Json_og_wise_filtered = Json.filter(array => array["Master Client Name"]  === element)
    
  //             let ideas_submitted_prior_6_months    : number = 0;
  //             let ideas_implemented_prior_6_months  : number = 0;
  //             let ideas_implemented_ontime          : number = 0;
  //             let ideas_implemented                 : number = 0;
  //             let ideas_validated                   : number = 0;
  //             let ideas_validated_14_days           : number = 0;
  //             let ideas_submitted                   : number = 0;
              

  //             Json_og_wise_filtered.forEach( ( element ) => {
  //               ideas_submitted_prior_6_months    += +element["No. of Ideas Submitted (Prior 6 Months)"];
  //               ideas_implemented_prior_6_months  += +element["No. of Ideas Implemented(Prior 6 Months)"]
  //               ideas_implemented_ontime          += +element["Ideas Implemented Ontime(In)"]
  //               ideas_implemented                 += +element["Ideas Implemented(In)"]
  //               ideas_validated_14_days           += +element["No. of Ideas Validated <=14 days"]
  //               ideas_validated                   += +element["No. of Ideas Validated"]
  //               ideas_submitted                   += +element["No. of Ideas Submitted"]
  //             });

  //             let og_obj = {};
  //             og_obj[element] = {
  //               ideas_implemented         : this.calculateImplementationRate(ideas_submitted_prior_6_months,  ideas_implemented_prior_6_months),
  //               ontime_implementation_rate: this.calculateOntimeImplementationRate(ideas_implemented_ontime,ideas_implemented),
  //               validation_rate           : this.calculateValidationRate(ideas_validated_14_days,ideas_validated),
  //               ideas_submited_count      : ideas_submitted,
  //               ipp                       : this.active_deal_headcount
  //             };
  //             this.OG_wise_data_pf.data.push(og_obj);
    
  //           });

  //           this.location_wise_data_pf.data=[]
  //           Location.forEach((element) => {

  //             let Json_loc_wise_filtered = Json.filter(array => array["Location"]  === element)
    
  //             let ideas_submitted_prior_6_months    : number = 0;
  //             let ideas_implemented_prior_6_months  : number = 0;
  //             let ideas_implemented_ontime          : number = 0;
  //             let ideas_implemented                 : number = 0;
  //             let ideas_validated                   : number = 0;
  //             let ideas_validated_14_days           : number = 0;
  //             let ideas_submitted                   : number = 0;
            

  //             Json_loc_wise_filtered.forEach( ( element ) => {
  //               ideas_submitted_prior_6_months    += +element["No. of Ideas Submitted (Prior 6 Months)"];
  //               ideas_implemented_prior_6_months  += +element["No. of Ideas Implemented(Prior 6 Months)"]
  //               ideas_implemented_ontime          += +element["Ideas Implemented Ontime(In)"]
  //               ideas_implemented                 += +element["Ideas Implemented(In)"]
  //               ideas_validated_14_days           += +element["No. of Ideas Validated <=14 days"]
  //               ideas_validated                   += +element["No. of Ideas Validated"]
  //               ideas_submitted                   += +element["No. of Ideas Submitted"]
  //             });

  //             let loc_obj = {};
  //             loc_obj[element] = {
  //               ideas_implemented         : this.calculateImplementationRate(ideas_submitted_prior_6_months,  ideas_implemented_prior_6_months),
  //               ontime_implementation_rate: this.calculateOntimeImplementationRate(ideas_implemented_ontime,ideas_implemented),
  //               validation_rate           : this.calculateValidationRate(ideas_validated_14_days,ideas_validated),
  //               ideas_submited_count      : ideas_submitted,
  //               ipp                       : this.active_deal_headcount
  //             };
              
  //             this.location_wise_data_pf.data.push(loc_obj);
            
  //           });
  //           console.log(this.OG_wise_data_pf);
  //           console.log(this.OG_wise_data_pf.data["LIBERTY GLOBAL"]);
  //           console.log(this.location_wise_data_pf);
  //           //console.log(this.OG_wise_data_pf);
  //          // console.log(this.location_wise_data_pf);

  //           break; 
  //       } 

  //       case "RedFlaggedReport": {
          
  //         // this.upload_resp_rf = "Processed " + Json.length + " records!"
          
  //         // this.OG_wise_data_rf = {};
  //         // this.location_wise_data_rf = {};

  //         // this.rf_calculate(Json);

  //         // console.log(this.location_wise_data_rf);
  //         // console.log(this.OG_wise_data_rf);

  //         break;
  //       } 

  //       default: { 
  //           break; 
  //       } 
  //     } 
      
  //     console.log(workbook.SheetNames);
        
  //   }
  // fileReader.readAsArrayBuffer(this.file);
     
}

pf_calculate(Json){
  let OG       = Array.from(new Set(Json.map(Json => Json["Master Client Name"])));
  let Location = Array.from(new Set(Json.map(Json => Json["Location"])));

  OG.forEach((element) => {

    let Json_og_wise_filtered = Json.filter(array => array["Master Client Name"]  === element)

    let ideas_submitted_prior_6_months    : number = 0;
    let ideas_implemented_prior_6_months  : number = 0;
    let ideas_implemented_ontime          : number = 0;
    let ideas_implemented                 : number = 0;
    let ideas_validated                   : number = 0;
    let ideas_validated_14_days           : number = 0;
    let ideas_submitted                   : number = 0;
    

    Json_og_wise_filtered.forEach( ( element ) => {
      ideas_submitted_prior_6_months    += +element["No. of Ideas Submitted (Prior 6 Months)"];
      ideas_implemented_prior_6_months  += +element["No. of Ideas Implemented(Prior 6 Months)"]
      ideas_implemented_ontime          += +element["Ideas Implemented Ontime(In)"]
      ideas_implemented                 += +element["Ideas Implemented(In)"]
      ideas_validated_14_days           += +element["No. of Ideas Validated <=14 days"]
      ideas_validated                   += +element["No. of Ideas Validated"]
      ideas_submitted                   += +element["No. of Ideas Submitted"]
    });


    let key: any = element;

    this.OG_wise_data_pf[key] = {
      ideas_implemented: this.calculateImplementationRate(ideas_submitted_prior_6_months, ideas_implemented_prior_6_months),
      ontime_implementation_rate: this.calculateOntimeImplementationRate(ideas_implemented_ontime, ideas_implemented),
      validation_rate: this.calculateValidationRate(ideas_validated_14_days, ideas_validated),
      ideas_submited_count: ideas_submitted,
      ipp: this.active_deal_headcount,
      master_client_name:key
    };

      
  });

  Location.forEach((element) => {

    let Json_loc_wise_filtered = Json.filter(array => array["Location"]  === element)

    let ideas_submitted_prior_6_months    : number = 0;
    let ideas_implemented_prior_6_months  : number = 0;
    let ideas_implemented_ontime          : number = 0;
    let ideas_implemented                 : number = 0;
    let ideas_validated                   : number = 0;
    let ideas_validated_14_days           : number = 0;
    let ideas_submitted                   : number = 0;
    

    Json_loc_wise_filtered.forEach( ( element ) => {
      ideas_submitted_prior_6_months    += +element["No. of Ideas Submitted (Prior 6 Months)"];
      ideas_implemented_prior_6_months  += +element["No. of Ideas Implemented(Prior 6 Months)"]
      ideas_implemented_ontime          += +element["Ideas Implemented Ontime(In)"]
      ideas_implemented                 += +element["Ideas Implemented(In)"]
      ideas_validated_14_days           += +element["No. of Ideas Validated <=14 days"]
      ideas_validated                   += +element["No. of Ideas Validated"]
      ideas_submitted                   += +element["No. of Ideas Submitted"]
    });


    let key: any = element;

    this.location_wise_data_pf[key] = {
      ideas_implemented: this.calculateImplementationRate(ideas_submitted_prior_6_months, ideas_implemented_prior_6_months),
      ontime_implementation_rate: this.calculateOntimeImplementationRate(ideas_implemented_ontime, ideas_implemented),
      validation_rate: this.calculateValidationRate(ideas_validated_14_days, ideas_validated),
      ideas_submited_count: ideas_submitted,
      ipp: this.active_deal_headcount
    };

      
  });
}

ia_calculate(Json){
  console.log("checked");
  let OG       = Array.from(new Set(Json.map(Json => Json["Master Client Name"])));
  let Location = Array.from(new Set(Json.map(Json => Json["Location"])));

  OG.forEach((element) => {

    let Json_og_wise_filtered = Json.filter(array => array["Master Client Name"]  === element)
    
    let rf_7days : number = 0;
    let rf_30days: number = 0;

    Json_og_wise_filtered.forEach( ( element ) => {


      if((element["Idea Workflow"] == "Assign Implementer") || (element["Idea Workflow"] == "Validate Idea")){
      
        let rf_due_days : number = moment(moment(element["Last Actioned On"]).add(90,"days")).diff(moment(), 'days', true);
        
        if((rf_due_days >= 0) && (rf_due_days <= 7)){
          rf_7days+=1;
        }else if((rf_due_days >= 8) && (rf_due_days <= 30)){
          rf_30days+=1;
        }

      }else if((element["Idea Workflow"] == "Implement Idea")){
        
        let rf_due_days:number = moment(moment(element["Estimated Implementation Date"]).add(365,"days")).diff(moment().toDate(), 'days', true);
        
        if((rf_due_days >= 0) && (rf_due_days <= 7)){
          rf_7days+=1;
        }else if((rf_due_days >= 8) && (rf_due_days <= 30)){
          rf_30days+=1;
        }
      }

    });

    let key : any = element;
    
    this.OG_wise_data_ia[key] = {
      ideas_redflagged_7days  : rf_7days,
      ideas_redflagged_30days : rf_30days
    };

  });

  Location.forEach((element) => {

    let Json_loc_wise_filtered = Json.filter(array => array["Location"]  === element)
    
    let rf_7days : number = 0;
    let rf_30days: number = 0;

    Json_loc_wise_filtered.forEach( ( element ) => {


      if((element["Idea Workflow"] == "Assign Implementer") || (element["Idea Workflow"] == "Validate Idea")){
      
        let rf_due_days : number = moment(moment(element["Last Actioned On"]).add(90,"days")).diff(moment(), 'days', true);
        
        if((rf_due_days >= 0) && (rf_due_days <= 7)){
          rf_7days+=1;
        }else if((rf_due_days >= 8) && (rf_due_days <= 30)){
          rf_30days+=1;
        }

      }else if((element["Idea Workflow"] == "Implement Idea")){
        
        let rf_due_days:number = moment(moment(element["Estimated Implementation Date"]).add(365,"days")).diff(moment().toDate(), 'days', true);
        
        if((rf_due_days >= 0) && (rf_due_days <= 7)){
          rf_7days+=1;
        }else if((rf_due_days >= 8) && (rf_due_days <= 30)){
          rf_30days+=1;
        }
      }

    });

    let key : any = element;
    
    this.location_wise_data_ia[key] = {
      ideas_redflagged_7days  : rf_7days,
      ideas_redflagged_30days : rf_30days
    };

  });
}

rf_calculate(Json){

  let OG       = Array.from(new Set(Json.map(Json => Json["Master Client Name"])));
  let Location = Array.from(new Set(Json.map(Json => Json["Location"])));
  
  OG.forEach((element) => {

    let Json_og_wise_filtered = Json.filter(array => array["Master Client Name"]  === element)
    
    let key : any = element;
    
    this.OG_wise_data_rf[key] = {red_flagged_ideas:Json_og_wise_filtered.length};
    

  });

  Location.forEach((element) => {

    let Json_loc_wise_filtered = Json.filter(array => array["Location"]  === element)

    let key : any = element;
    
    this.location_wise_data_rf[key]=  {red_flagged_ideas:Json_loc_wise_filtered.length};
  });

}


  public weekly_data: WeAt[];
  public temp_data : any ;
  we_at_current: WeAt ={ 
    
    ideas_submited_count : 0,
    ipp : 0,
    red_flagged_ideas : 0,
    implementation_rate : 0,
    ontime_implementation_rate : 0,
    validation_rate : 0,
    ideas_redflagged_7days : 0,
    ideas_redflagged_30days : 0,
    region: "",
    location: "",
    capability: "",
    master_client_name: "",
    process: "",
    hc:0

  };

  public active_deal_name: string = "SPRINT"
  public active_deal_location: string = "Mumbai"
  public active_deal_headcount: number = 7;

  


  constructor(private weatService: WeAtService) {
    
  }

  calculateImplementationRate(
    ideas_submitted_prior_6_months  : number, 
    ideas_implemented_prior_6_months: number)
    {
      let implementation_rate : number = ( 100 * ideas_implemented_prior_6_months ) / ideas_submitted_prior_6_months;
      return isFinite(implementation_rate) ? implementation_rate : 0;
    }

  calculateOntimeImplementationRate(
    ideas_implemented_ontime  : number, 
    ideas_implemented         : number) 
    {
      let ontime_implementation_rate : number = ( 100 * ideas_implemented_ontime ) / ideas_implemented;
      return isFinite( ontime_implementation_rate ) ? ontime_implementation_rate : 0;
    }

  calculateValidationRate(
    ideas_validated_14_days : number, 
    ideas_validated         : number) 
    {
      let validation_rate : number = ( 100 * ideas_validated_14_days ) / ideas_validated;
      return isFinite( validation_rate ) ? validation_rate : 0;
    }

   

    calculateIA() {
      this.weatService.getIAData()
        .subscribe(ia_data => {
          let ia_raw_data_array = ia_data
          
         // .filter(proj => proj["Master Client Name"]  === this.active_deal_name)
         // .filter(proj => proj["Location"]  === this.active_deal_location)
  
          let rf_7days : number = 0;
          let rf_30days: number = 0;
          
          let rf_due_days : number;
          let days_to_add: number;
  
          ia_raw_data_array.forEach( ( element ) => {
            
            
            if((element["Idea Workflow"] == "Assign Implementer") || (element["Idea Workflow"] == "Validate Idea")){
              
              let rf_due_days : number = moment(moment(element["Last Actioned On"]).add(90,"days")).diff(moment(), 'days', true);
              
              if((rf_due_days >= 0) && (rf_due_days <= 7)){
                rf_7days+=1;
              }else if((rf_due_days >= 8) && (rf_due_days <= 30)){
                rf_30days+=1;
              }
     
            }else if((element["Idea Workflow"] == "Implement Idea")){
              
              let rf_due_days:number = moment(moment(element["Estimated Implementation Date"]).add(365,"days")).diff(moment().toDate(), 'days', true);
              
              if((rf_due_days >= 0) && (rf_due_days <= 7)){
                rf_7days+=1;
              }else if((rf_due_days >= 8) && (rf_due_days <= 30)){
                rf_30days+=1;
              }
            }

  
  
          });
          //this.we_at_current.ideas_redflagged_7days       = rf_7days
          //this.we_at_current.ideas_redflagged_30days        = rf_30days
          
        });
  
    }

    calculateRF() {
      this.weatService.getRFData()
        .subscribe(rf_data => {
          let rf_raw_data_array = rf_data
         // .filter(proj => proj["Master Client Name"]  === this.active_deal_name)
         // .filter(proj => proj["Location"]  === this.active_deal_location)

          this.we_at_current.red_flagged_ideas = rf_raw_data_array.length

        });
    }

  
  calculatePF() {
    this.weatService.getPFData()
      .subscribe(pf_data => {
        let pf_raw_data_array = pf_data
        //.filter(proj => proj["Location"]            === "Chennai")
        //.filter(proj => proj["Master Client Name"]  === this.active_deal_name)
        //  .filter(proj => proj["Location"]  === this.active_deal_location)

        

        let ideas_submitted_prior_6_months    : number = 0;
        let ideas_implemented_prior_6_months  : number = 0;
        let ideas_implemented_ontime          : number = 0;
        let ideas_implemented                 : number = 0;
        let ideas_validated                   : number = 0;
        let ideas_validated_14_days           : number = 0;
        let ideas_submitted                   : number = 0;

        pf_raw_data_array.forEach( ( element ) => {

          ideas_submitted_prior_6_months    += +element["No. of Ideas Submitted (Prior 6 Months)"];
          ideas_implemented_prior_6_months  += +element["No. of Ideas Implemented(Prior 6 Months)"]
          ideas_implemented_ontime          += +element["Ideas Implemented Ontime(In)"]
          ideas_implemented                 += +element["Ideas Implemented(In)"]
          ideas_validated_14_days           += +element["No. of Ideas Validated <=14 days"]
          ideas_validated                   += +element["No. of Ideas Validated"]
          ideas_submitted                   += +element["No. of Ideas Submitted"]

        });

        
        this.we_at_current.implementation_rate        = this.calculateImplementationRate      (ideas_submitted_prior_6_months,  ideas_implemented_prior_6_months);
        this.we_at_current.ontime_implementation_rate = this.calculateOntimeImplementationRate(ideas_implemented_ontime,        ideas_implemented);
        this.we_at_current.validation_rate            = this.calculateValidationRate          (ideas_validated_14_days,         ideas_validated)
        this.we_at_current.ideas_submited_count       = ideas_submitted
        this.we_at_current.ipp                        = this.active_deal_headcount

      });
      

  }



  getCurrentWeekInfo_singleDeal(){
    this.calculatePF();
    this.calculateRF()
    this.calculateIA();
    
    return this.we_at_current;
  }

  getWeekStack_singleDeal(weeks_limit){
    this.weatService.getWeekStack(weeks_limit)
        .subscribe(weeks => {
          let weekly_data_array = weeks
          //.filter(proj => proj["Master Client Name"]  === this.active_deal_name)
          //.filter(proj => proj["Location"]  === this.active_deal_location)

          this.weekly_data = weekly_data_array

        });
  }

  getCurrentWeekInfo_multiDeal(){

  }

  getWeekStack_multiDeal(week_limit){

  }

  saveWeekInfo(){
    
    
  }

  updateWeekInfo(){

  }

  deleteWeekInfo(){

  }

  ngOnInit() {
 
    this.we_at_current;
    this.calculatePF();
    this.calculateRF()
    this.calculateIA();
    //this.saveWeekInfo();
    
    this.getWeekStack_singleDeal(20);

    
    

  }

}
