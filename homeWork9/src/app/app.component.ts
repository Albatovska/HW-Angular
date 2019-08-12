import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-decrement-component></app-decrement-component>
    <app-counter-component></app-counter-component>
    <app-increment-component></app-increment-component>
    <app-reset-component></app-reset-component>
  `
})
export class AppComponent {
  title = 'homeWork';
}
