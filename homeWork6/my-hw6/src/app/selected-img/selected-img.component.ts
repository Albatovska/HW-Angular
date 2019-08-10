import { Component, OnInit, Input } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-selected-img',
  templateUrl: './selected-img.component.html',
  styleUrls: ['./selected-img.component.css']
})

export class SelectedImgComponent {
  @Input()
  public selectImageUrl;
  }
