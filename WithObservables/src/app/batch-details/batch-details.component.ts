import { Component } from '@angular/core';
import { BatchService } from '../batch.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.css'
})
export class BatchDetailsComponent 
{
  public batches : any = [];
  
  public constructor(private sobj : BatchService)
  {
    sobj.GetBatches().subscribe(data => this.batches = data);

  }
}
