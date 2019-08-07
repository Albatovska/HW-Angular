import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-date',
    template: `
    <h2>Today</h2>
    <p>The time is {{time | date:'h:mm:ss'}}</p>
    `
   })
export class ClockDisplay implements OnInit, OnDestroy {
  public time: Date = new Date();
  private interval: any;

    ngOnInit(): void {
       this.interval = setInterval(() => {
            this.time = new Date();
        }, 1000);
    }
    ngOnDestroy(): void {
      clearInterval(this.interval);
    }
}
