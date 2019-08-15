import { Component, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public arrayDataCards: Array<string>;

  constructor(private service: Service) { }

 ngOnInit(): void {
    this.service.arrayData.subscribe((val) => {
      this.arrayDataCards = val;
      console.log(this.arrayDataCards);
    });
 }
}
