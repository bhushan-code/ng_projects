import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { batches} from './batches';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BatchesService 
{
  private url = "/assets/data/batchesdb.json";
  constructor(private http : HttpClient) { }

  public GetBatches() : Observable<batches[]>
  {
    return this.http.get<batches[]>(this.url);
  }
}
