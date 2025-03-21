import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousDirective } from './marvellous.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarvellousDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'CustomDirective2';
}
