import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent {

  constructor(private service: Service) { }

    public nameCard = '';
    public urlCard = '';
    public urlData;
    public cardData = [];

    public file() {
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.urlData = reader.result;
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

     public handler(): void {
        if (this.nameCard === '') { this.nameCard = ''; this.urlCard = '';  return; }
        if (this.urlCard === '' && this.urlData === '') { this.nameCard = ''; this.urlCard = ''; return; }

        const objectCard = {
            name: this.nameCard,
            url: this.urlCard,
            urlData: this.urlData
        };
        this.cardData.push(objectCard);

        this.service.Data = this.cardData;
        setTimeout(() => {
            this.nameCard = '';
            this.urlCard = '';
        }, 500);
     }
}
