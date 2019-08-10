import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery.component';
import { SelectedImgComponent } from './selected-img/selected-img.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SelectedImgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
