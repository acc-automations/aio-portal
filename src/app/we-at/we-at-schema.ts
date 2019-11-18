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

export interface WeAt {
    _id?: string;    
    ideas_submited_count : number;
    ipp : number;
    red_flagged_ideas : number;
    implementation_rate : number;
    ontime_implementation_rate : number;
    validation_rate : number;
    ideas_redflagged_7days : number;
    ideas_redflagged_30days : number;
    region: string;
    location: string;
    capability: string;
    master_client_name: string;
    process: string;
    hc:number;
  }
  