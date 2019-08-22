import { Component, OnInit } from '@angular/core';

import { Service } from '../../service';
import { Card } from '../../../models/cardsPhoto';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss',
    '../../../../../node_modules/font-awesome/css/font-awesome.css'
  ]
})
export class GalleryComponent implements OnInit {
 public arrayDataCards: Array<Card>;
  public urlImg: string;


  constructor(private service: Service) { }

  public imgCkick(event): void {
    this.urlImg = event.path[0].currentSrc;
    const popup = document.getElementsByClassName('popupImage');
    if (popup) {
      popup[0].classList.toggle('d-none');
    }
  }
 public close(): void {
    const popup = document.getElementsByClassName('popupImage');
    if (popup) {
      popup[0].classList.toggle('d-none');
    }
  }

 public like(event): void {
    event.path[1].lastElementChild.innerText = Number(event.path[1].lastElementChild.innerText) + 1;
  }
 ngOnInit(): void {
       this.service.arrayData.subscribe((val: Array<Card>) => {
      this.arrayDataCards = val;
     });
 }
}
