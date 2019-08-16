import { Component } from '@angular/core';
import { Service } from '../service';
import { Card } from '../types';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent {

  constructor(private service: Service) { }

    public nameCard = '';
    public urlCard = '';
    public urlData: string;
    public cardData: Array<Card> = [];

    public file($event: Event) {
        const file = ($event.target as HTMLInputElement).files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.urlData = reader.result as string;
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

     public handler(): void {
        if (this.nameCard === '' || (this.urlCard === '' && this.urlData === '')) { this.nameCard = ''; this.urlCard = '';  return; }

        const objectCard = {
            name: this.nameCard,
            url: this.urlCard,
            urlData: this.urlData
        };
        
        this.cardData.push(objectCard);

        this.service.Data = this.cardData;
        this.nameCard = '';
        this.urlCard = '';
     }
}
