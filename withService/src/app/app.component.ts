import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BatchDetailsComponent, BatchListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
}
