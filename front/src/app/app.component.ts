import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { Action, Store } from '@ngrx/store';

import { ADVANCE, HOUR, SECOND, RECALL } from './reducers';

interface AppState {
  clock: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  click$ = new Subject<string>()
    .map((value) => ({type: HOUR, payload: parseInt(value)}));
  seconds$ = Observable
    .interval(1000)
    .map(() => ({type: SECOND, payload: 1}));
  person$ = new Subject<any>()
    .map((value) => ({type: ADVANCE, payload: value}));
  recall$ = new Subject<any>()


  clock: Observable<Date>;
  people: Observable<any>;

  constructor(store: Store<AppState>) {
    this.clock = store.select('clock');
    this.people = store.select('people');

    Observable
      .merge(
        this.click$,
        this.seconds$,
        this.person$,
        this.recall$
          .withLatestFrom(this.clock, (_, y) => y)
          .map((time) => ({type: RECALL, payload: time}))
      )
      .subscribe(store.dispatch.bind(store))
  }
}
