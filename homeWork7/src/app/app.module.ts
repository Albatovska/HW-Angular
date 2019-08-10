import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConvertToMorse } from './morzeAlphabet.pipe';
import {ClockDisplay} from './clockDisplay';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToMorse,
    ClockDisplay
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
