import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'My home work 6';
 public srcImg = ' ';

  public readProperty($event): void {
    this.srcImg = $event;
    console.log(this.srcImg)
  }
 }
