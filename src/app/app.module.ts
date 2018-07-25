import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { ReviveCalcComponent } from './components/revive-calc/revive-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ReviveCalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
