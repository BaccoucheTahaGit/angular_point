import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PointComponent } from './point/point.component';
import { TroispointsComponent } from './troispoints/troispoints.component';

@NgModule({
  declarations: [
    AppComponent,
    PointComponent,
    TroispointsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
