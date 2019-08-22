import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

import { Card } from '../../../models/cardsPhoto';

import store from '../../../store/store';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss',
    '../../../../../node_modules/font-awesome/css/font-awesome.css'
  ]
})
export class GalleryComponent implements OnInit {
  @ViewChildren('likeBtn', { read: ElementRef })
  likeBtn: QueryList<ElementRef>;

  public arrayDataCards: Array<Card>;
  public urlImg: string;
  public isShowPopup: boolean;

  public imgCkick($event: string): void {
    this.urlImg = $event;
    
    this.togglePopup();
  }

  public close(): void {
    this.togglePopup();
  }

  private togglePopup = () => this.isShowPopup = !this.isShowPopup;

  public like($event: number): void {
    const element = this.likeBtn.toArray()[$event].nativeElement;
    element.lastElementChild.innerText = Number(element.lastElementChild.innerText) + 1;
  }

  ngOnInit(): void {
    store.subscribe(() => this.arrayDataCards = store.getState());
 }
}
