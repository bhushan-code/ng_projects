import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [BatchesService]
})
export class DemoComponent 
{
  public batch : any = [];

  constructor(private bobj : BatchesService)
  {
    bobj.Getbatches().subscribe(data=> this.batch = data);
  }

}
