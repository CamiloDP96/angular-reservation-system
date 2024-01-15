import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    LogInComponent,
    ReservationListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
