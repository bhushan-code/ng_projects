import { Component } from '@angular/core';
import { BatchService } from '../batch.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent 
{
  public batches : any = [];
  
  public constructor(private sobj : BatchService)
  {
    sobj.GetBatches().subscribe(data=>this.batches = data);

  }
}
