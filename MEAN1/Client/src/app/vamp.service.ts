import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VampService 
{
  constructor(private http : HttpClient) { }

  GetDetails()
  {
    return this.http.get("http://localhost:5100/");
  }
}
