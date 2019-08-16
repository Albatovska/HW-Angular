import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Service } from '../service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

constructor(private service: Service) { }


  public arrayImg = [];
  public value;
  public date;
  @Output() event = new EventEmitter();



  ngOnInit() {
    this.service.dateImg.subscribe(
      (val) => {
        this.date = val;
      }
    );
  }
  addImg() {
    // tslint:disable-next-line: no-bitwise
    if (~this.value.indexOf('https://') || ~this.value.indexOf('http://')) {
      this.arrayImg.push({ url: this.value, date: this.date });
      this.value = '';
      this.event.emit(this.arrayImg);
    } else {
      this.value = '';
    }
  }
}
