import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownModule } from 'ngx-countdown';
import { CountDownComponent } from './count-down/count-down.component';
import { InadvanceComponent } from './inadvance/inadvance.component';
import { ThedayComponent } from './theday/theday.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    InadvanceComponent,
    ThedayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CountdownModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
