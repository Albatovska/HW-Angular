import { EventEmitter } from '@angular/core';

export class Service {
    public dateImg = new EventEmitter<string>();

    set Date(value) {
        this.dateImg.emit(value);
    }
}
