import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Service} from './component/service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoadingImgComponent } from './component/mainBlock/loading-img/loading-img.component';
import { GalleryComponent } from './component/mainBlock/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingImgComponent,
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
