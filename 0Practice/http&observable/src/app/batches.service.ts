import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { batches } from './batches';


@Injectable({
  providedIn: 'root'
})

export class BatchesService 
{
  public url = "assets/data/batchesdb.json";

  constructor(private http : HttpClient) { }

  public Getbatches() : Observable<batches[]>
  {
    return this.http.get<batches[]>(this.url);
  }

}
