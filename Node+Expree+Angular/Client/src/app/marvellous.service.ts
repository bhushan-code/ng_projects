import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{
  //Dependancy Injection for HTTP
  constructor(private http : HttpClient) { }

  getBatches()
  {
    //It connect with Node_Express server
    return this.http.get("http://localhost:5100/getbatches");
  }
}
