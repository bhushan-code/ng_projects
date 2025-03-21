import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public City = ["Pune", "Mumbai", "Satara", "Nashik", "Kolhapur"];

  /*
    for(int i = 0; i<City.length; i++)
    {
      console.log(City[i])
    }
  */
}
