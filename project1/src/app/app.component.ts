import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project1';

  data = 'Some data';
  inputValue: string = '';
  inputValue2: string = '';

  updateTextValue(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
}
