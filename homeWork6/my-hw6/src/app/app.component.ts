import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'My home work 6';

 public images: ImagesInterface [] = [
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/maldivy.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/Rio-de-zhaneiro.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/gran-canaria.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/Bali.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/mayami.jpg'}
  ];

 public selectImageUrl: string = this.images[0].url;

 public readProperty($event): void {
    this.selectImageUrl = $event;
    console.log(this.selectImageUrl);
 }
}
export interface ImagesInterface {
  url: string;
}

