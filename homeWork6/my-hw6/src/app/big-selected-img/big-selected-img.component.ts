import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-big-selected-img',
  templateUrl: './big-selected-img.component.html',
  styleUrls: ['./big-selected-img.component.css']
})
export class BigSelectedImgComponent implements OnInit {
  public listPicture: string = "https://www.topkurortov.com/wp-content/uploads/2015/09/Goa.jpg";
  
    ngOnInit() {
    const listPictureEventlistener = fromEvent(document.querySelector(".gallary"), 'click');
    listPictureEventlistener.subscribe(
      (event: any) => {
        if (event.path[0].currentSrc) {
          this.listPicture = event.path[0].currentSrc;
        } else {
          this.listPicture = "https://www.topkurortov.com/wp-content/uploads/2015/09/Goa.jpg";
        }
      });
  }
}
