import { Component } from '@angular/core';

interface ImagesInterface {
  url: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public images: ImagesInterface[] = [
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/maldivy.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/Rio-de-zhaneiro.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/gran-canaria.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/Bali.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/mayami.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/seyshelly.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/dubai.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/Goa.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/gavai.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/Puerto-Plata.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/kaymanvye-ostrova.jpg'},
    {url: 'https://www.topkurortov.com/wp-content/uploads/2015/09/saloniki_8.jpg'},
    {url: 'http://deartravel.ru/uploads/posts/2013-08/thumbs/1375538475_17villachiincapesiennaresort.jpg'},
    {url: 'http://deartravel.ru/uploads/posts/2013-08/thumbs/1375538434_16astarteboutiquehotel.jpg'},
    {url: 'http://deartravel.ru/uploads/posts/2013-08/thumbs/1375538311_13tajexoticaresortandspamaldives.jpg'}
  ];
}
