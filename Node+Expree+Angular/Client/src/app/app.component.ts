import { Component, OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone : false
})
export class AppComponent implements OnInit
{
  message : any;

  constructor(private sobj : MarvellousService){}

  //This method get automatically called when component gets created  
  ngOnInit(): void 
  {
    this.sobj.getBatches().subscribe(data=>{
      this.message = data;
    })  
  }
}
