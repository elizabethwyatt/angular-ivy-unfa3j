import { Component, VERSION } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count = 1;
  receiving = false;

  start = () => {
    this.receiving = true;
    interval(300)
      .pipe(takeWhile(() => this.receiving))
      .subscribe(() => this.count++);
  };

  stop = () => {
    this.receiving = false;
  };

  reset = () => {
    this.count = 0;
  };
}
