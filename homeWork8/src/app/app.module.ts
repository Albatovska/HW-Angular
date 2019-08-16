import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UploadsComponent } from './uploads/uploads.component';
import { Service } from './service';
import { GalleryComponent } from './gallery/gallery.component';




@NgModule({
  declarations: [
    AppComponent,
    UploadsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
