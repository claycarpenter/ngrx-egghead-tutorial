import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  click$ = new Subject();
  clock;

  constructor() {
    this.clock = Observable
      .merge(
        this.click$.mapTo('hour'),
        Observable.interval(1000).mapTo('second')
      )
      .scan((acc:Date, curr) => {
        const date = new Date(acc.getTime());

        if(curr === 'second'){
          date.setSeconds(date.getSeconds() + 1);
        }

        if(curr === 'hour'){
          date.setHours(date.getHours() + 1);
        }

        return date;
      }, new Date());
  }
}
