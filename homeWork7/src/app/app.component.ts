import { Component } from '@angular/core';
import { ConvertToMorse} from './morzeAlphabet.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [ ConvertToMorse ]
})
export class AppComponent {
  title = 'homeWork7';
   textToMorse: string = '';
}
