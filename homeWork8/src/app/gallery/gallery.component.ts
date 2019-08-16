import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Card } from '../types';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public arrayDataCards: Array<Card>;

  constructor(private service: Service) { }

 ngOnInit(): void {
    this.service.arrayData.subscribe((val: Array<Card>) => {
      this.arrayDataCards = val;
    });
 }
}
