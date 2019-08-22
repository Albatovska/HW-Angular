import { Component } from '@angular/core';

import store from '../../../store/store';
import actions from '../../../store/actions';

const { ADD } = actions;

@Component({
  selector: 'app-loading-img',
  templateUrl: './loading-img.component.html',
  styleUrls: [ './loading-img.component.scss']
})
export class LoadingImgComponent {

    public nameCard = '';
    public urlData: string;
    private urlCard = '';

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
        
        store.dispatch({
            type: ADD,
            payload: objectCard
        });

        this.nameCard = '';
        this.urlCard = '';
     }
}
