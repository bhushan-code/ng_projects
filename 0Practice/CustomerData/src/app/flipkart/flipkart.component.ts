import { Component } from '@angular/core';
import { CDataService } from '../cdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flipkart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flipkart.component.html',
  styleUrl: './flipkart.component.css'
})
export class FlipkartComponent
{
  public DataF : any = [];
  public constructor(o : CDataService)
  {
    this.DataF = o.GetData();
  }

}
