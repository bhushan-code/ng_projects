import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CDataService 
{
  constructor() 
  { }
  public GetData()
  {
    return[
      {"Name" : "Bhushan","City" : "Nagar", "Mob" : 7040499405},
      {"Name" : "Omkar","City" : "shikrapur", "Mob" : 9373729020},
      {"Name" : "Rohan","City" : "Pimpari", "Mob" : 9511644520}
    ]
  }
}
