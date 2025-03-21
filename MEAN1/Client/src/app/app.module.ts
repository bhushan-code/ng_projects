import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VampService } from './vamp.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppleComponent } from './apple/apple.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    VampService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
