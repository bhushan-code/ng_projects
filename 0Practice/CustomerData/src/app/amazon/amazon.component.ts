import { Component } from '@angular/core';
import { CDataService } from '../cdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amazon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amazon.component.html',
  styleUrl: './amazon.component.css'
})
export class AmazonComponent
{
  public DataA : any = [];
  
  public constructor(cdataobj : CDataService)
  {
    this.DataA = cdataobj.GetData();
  }
}
