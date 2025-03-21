import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarvellousComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Twowaybinding';
}
