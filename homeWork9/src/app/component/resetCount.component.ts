import { Component } from '@angular/core';
import store from '../store/store';
import actions from '../store/actions';

@Component({
    selector: 'app-reset-component',
    template: `
        <div><button (click)="handler()">Reset</button></div>
    `
})

export class ResetCountComponent {
    public handler(): void {
        store.dispatch({ type: actions.RESET });
    }
}
