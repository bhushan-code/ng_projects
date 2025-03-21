import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Batches } from './Batches';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BatchService 
{
  public url = "/Batches.json";

  constructor(private http : HttpClient) 
  {   }

  public GetBatches() : Observable <Batches[]>
  {
    return this.http.get<Batches[]>(this.url);
  }
}
