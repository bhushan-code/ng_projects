import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchesService 
{
  constructor() 
  {

  }

  public GetBatches()
  {
    return [
      {"Name" : "PPA","Duration" : "4 Month", "Fees" : 20000},
      {"Name" : "LB","Duration" : "4 Month", "Fees" : 21000},
      {"Name" : "Angular","Duration" : "4.5 Month", "Fees" : 21500}
    ]
  }
}
