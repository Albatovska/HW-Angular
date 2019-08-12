import { Component } from '@angular/core';
import store from '../store/store';
import actions from '../store/actions';

@Component({
    selector: 'app-decrement-component',
    template: `
    <button (click) = 'handler()'>-</button>
    `,
})
export class DecrementComponent {
    handler() {
        store.dispatch({type: actions.DECREMENT, payload: 1 });
    }
}
