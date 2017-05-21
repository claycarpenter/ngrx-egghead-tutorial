import { Action } from '@ngrx/store';

export const HOUR = 'HOUR';
export const SECOND = 'SECOND';
export const ADVANCE = 'ADVANCE';
export const RECALL = 'RECALL';

const initClock = new Date();
export function clock(state = initClock, action: Action = {type: null}):Date {
  const date = new Date(state.getTime());

  switch (action.type) {
    case SECOND:
      date.setSeconds(date.getSeconds() + action.payload);
      return date;

    case HOUR:
      date.setHours(date.getHours() + action.payload);
      return date;

    default:
      return state;
  }
}

const initPeople = [
  {name: 'Sara', time: clock()},
  {name: 'Dwight', time: clock()},
  {name: 'Micheal', time: clock()},
  {name: 'John', time: clock()},
];
export function people(state = initPeople, action: Action = {type: null}) {
  switch (action.type) {
    case ADVANCE:
      return state.map((person) => {
        if (person === action.payload) {
          return {
            name: person.name,
            time: clock(person.time, {type: HOUR, payload: 3}),
          }
        }

        return person;
      });

    case RECALL:
      return state.map(person => {
        return {
          name: person.name,
          time: action.payload,
        };
      });

    default:
      return state;
  }
}
