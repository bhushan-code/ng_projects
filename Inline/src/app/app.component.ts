import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { PythonComponent } from './python/python.component';
import { PPAComponent } from './ppa/ppa.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarvellousComponent, PythonComponent, PPAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inline';
}
