/*xport class WeAt{
    _id?: string;    
    ideas_submited_count : number;
    ipp : number;
    implementation_rate : number;
    ontime_implementation_rate : number;
    ontime_validation : number;
    ideas_redflagged_7days : number;
    ideas_redflagged_30days : number;
    
}*/

export interface WeAt_IA {

    //client identity
    business                        : string; // "Business": "BPO",
    location                        : string; // "Location": "Chennai",
    master_client_name              : string; // "Master Client Name": "EXXON MOBIL CORP.",

    //No. of Ideas Submitted
    ideas_submitted                 : number; //"No. of Ideas Submitted": "0",

    //Implementation Rate (Rolling 6 Months) Target 30%
    ideas_submitted_prior_6_months  : number; //"No. of Ideas Submitted (Prior 6 Months)": "27",
    ideas_implemented_prior_6_months: number; //"No. of Ideas Implemented(Prior 6 Months)": "10",

    //On Time Implementation Rate Target 80%
    ideas_implemented               : number; //"Ideas Implemented(In)": "0",
    ideas_implemented_ontime        : number; //"Ideas Implemented Ontime(In)": "0",

    //Validation Rate Target 85%
    ideas_validated                 : number; //"No. of Ideas Validated": "0",
    ideas_validated_14_days         : number; //"No. of Ideas Validated <=14 days": "0",

}
