import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-date',
    template: `
    <h2>Today</h2>
    <p>The time is {{date | date:'h:mm:ss'}}</p>
    `
   })
export class ClockDisplay implements OnInit {
  public date;
    ngOnInit(): void {
        this.date = new Date();
    }
}   