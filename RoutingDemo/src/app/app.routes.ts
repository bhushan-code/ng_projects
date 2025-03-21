import { Routes } from '@angular/router';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { InvalidComponent } from './invalid/invalid.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    
    {
        path : '',                  //Default route
        component : WelcomeComponent
    },

    {
        path : 'batchdetails',      //specific route
        component : BatchdetailsComponent
    },

    {
        path : 'batchlist',         
        component : BatchlistComponent
    },
    {
        path :"**",                 //Wildcard routes 
        component : InvalidComponent
    }
  
];
