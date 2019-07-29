import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-selected-img',
  templateUrl: './selected-img.component.html',
  styleUrls: ['./selected-img.component.css']
})
export class SelectedImgComponent implements OnInit {
 public urlImgclick: string = '';
   ngOnInit() {
     const imgEventlistener = fromEvent(document.querySelector(".pictureList"), 'click');
    imgEventlistener.subscribe(
      (event: any) => {
        this.urlImgclick = event.path[0].currentSrc;
      })
  }

}
