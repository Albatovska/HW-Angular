import { Component } from '@angular/core';
import store from '../store/store';
import actions from '../store/actions';

@Component({
    selector: 'app-increment-component',
    template: `
    <button (click) = handler()>+</button>
    `,
})
export class IncrementComponent {
    handler() {
        store.dispatch({type: actions.INCREMENT, payload: 1 });
    }
}
