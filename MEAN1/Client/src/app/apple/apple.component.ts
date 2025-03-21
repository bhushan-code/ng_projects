import { Component, OnInit } from '@angular/core';
import { VampService } from '../vamp.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrl: './apple.component.css'
})
export class AppleComponent implements OnInit
{
  details : any;
  constructor(private sobj : VampService){}
  
  ngOnInit(): void 
  {
    this.sobj.GetDetails().subscribe(data=>{this.details = data;});
  }  
}