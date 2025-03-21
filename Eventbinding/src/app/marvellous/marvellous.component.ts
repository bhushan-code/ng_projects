import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
  public Information : String = "";

  public MarvellousEvent()
  {
    console.log("Click me button pressed");
  }

  public AngularEvent()
  {
    this.Information = "Angular button pressed";
  }

  public PythonEvent(value : any)
  {
    console.log(value);
  }
}
