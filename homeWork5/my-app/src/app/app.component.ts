
import { Component, ViewChild, ContentChildren } from '@angular/core';
import { fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 })

export class AppComponent {
  public count:number = 0;
  public click(): void {
    fromEvent(document, 'click');
     this.count++
    
     if(this.count===4){
      this.count = 0
      alert('Пора в отпуск')
    }
  }
 }

