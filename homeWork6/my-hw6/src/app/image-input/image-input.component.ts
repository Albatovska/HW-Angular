import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent {

@Input()
public srcImg: string = "";

@Output()
public usr = new EventEmitter();
public data = '';

public onInput(): void {
  this.usr.emit(this.data);
}
}
