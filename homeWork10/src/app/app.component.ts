import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeWork10';
   public imgGallary: string;
  public imgArray(event): void {
    this.imgGallary = event;
  }
}
