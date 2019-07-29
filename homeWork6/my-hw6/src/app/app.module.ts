import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ImageInputComponent } from './image-input/image-input.component';
import { SelectedImgComponent } from './selected-img/selected-img.component';
import { BigSelectedImgComponent } from './big-selected-img/big-selected-img.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageInputComponent,
    SelectedImgComponent,
    BigSelectedImgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
