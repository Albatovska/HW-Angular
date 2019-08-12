import { Component, OnInit } from '@angular/core';
import store from '../store/store';

@Component({
    selector: 'app-counter-component',
    template: `
        <h1>{{count}}</h1>
    `
})
export class CounterComponent implements OnInit {
     public count: any = 0;

    public ngOnInit(): void {
        store.subscribe(() => {
            const state: any = store.getState();
            this.count = state.counter;
        });
    }
}


