import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homeWork10';
   public imgGallary;
  public imgArray(event) {
    this.imgGallary = event;
  }

  ngOnInit(): void { }
}
