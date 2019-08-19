import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service } from './service';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DateComponent } from './gallery/date.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
