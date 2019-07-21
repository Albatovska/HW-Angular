import { Injectable } from '@angular/core';

@Injectable()

export class ImageService {
 visibleImage = [];

 getImage() {
     return this.visibleImage = IMAGES.slice(0);
    }
}

const IMAGES: Array<object> = [
{"id":1, "category": "resort", "caption": "Maldivy", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/maldivy.jpg"},
{"id":2, "category": "resort", "caption": "Rio de zhaneiro", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/Rio-de-zhaneiro.jpg"},
{"id":3, "category": "resort", "caption": "Gran canaria", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/gran-canaria.jpg"},
{"id":4, "category": "resort", "caption": "Bali", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/Bali.jpg"},
{"id":5, "category": "resort", "caption": "Mayami", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/mayami.jpg"},
{"id":6, "category": "resort", "caption": "Seyshelly", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/seyshelly.jpg"},
{"id":7, "category": "resort", "caption": "Dubai", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/dubai.jpg"},
{"id":8, "category": "resort", "caption": "Goa", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/Goa.jpg"},
{"id":9, "category": "resort", "caption": "Gavai", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/gavai.jpg"},
{"id":10, "category": "resort", "caption": "Puerto Plata", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/Puerto-Plata.jpg"},
{"id":11, "category": "resort", "caption": "Kaymanvye ostrova", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/kaymanvye-ostrova.jpg"},
{"id":12, "category": "resort", "caption": "Saloniki", "url": "https://www.topkurortov.com/wp-content/uploads/2015/09/saloniki_8.jpg"},
{"id":13, "category": "resort", "caption": "Chi in Cape Sienna Resort", "url": "http://deartravel.ru/uploads/posts/2013-08/thumbs/1375538475_17villachiincapesiennaresort.jpg"},
{"id":14, "category": "resort", "caption": "Astarte Boutique", "url": "http://deartravel.ru/uploads/posts/2013-08/thumbs/1375538434_16astarteboutiquehotel.jpg"},
{"id":15, "category": "resort", "caption": "Taj Exotica Maldivi", "url": "http://deartravel.ru/uploads/posts/2013-08/thumbs/1375538311_13tajexoticaresortandspamaldives.jpg"}
];