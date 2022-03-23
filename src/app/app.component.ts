import { Component, VERSION } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  source = interval(300);
  example = this.source.pipe();
  subscribe = this.example.subscribe((val) => console.log(val));
}
