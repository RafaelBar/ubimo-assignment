import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LogsComponent } from './logs/logs.component';
import { LogsFilterComponent } from './logs/logs-filter/logs-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LogsComponent,
    LogsFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
