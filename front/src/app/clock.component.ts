import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-clock',
  template: `{{ time | date:'medium'}}`
})
export class ClockComponent {
  @Input('time') time: Date;
}
