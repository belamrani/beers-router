import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action, Actions, AppState, Beer, Category, initialState} from './models';
import {of} from 'rxjs/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {

  state: Observable<AppState>;
  private id = 100;

  constructor(actions: Actions) {
    this.state = this.stateFn(actions);
    this.setUpEffects(actions);
  }

  getCategories(folder: string): Observable<Observable<Category[]>> {
    return of(this.state
      .do(s => {
        console.log(s);
      })
      .map(s => s.categories.filter(c => c.folder === folder)));
  }

  getCategory(id: number): Observable<Category> {
    return this.state.map(s => s.categories.filter(c => c.id === id)[0]).first();
  }

  getBeers(categoryId: number): Observable<Observable<Beer[]>> {
    return of(this.state.map(s => s.beers.filter(m => m.categoryId === categoryId)));
  }

  getBeer(name: string): Observable<Beer> {
    return this.state.map(s => s.beers.filter(m => m.name === name)[0]).first();
  }

  private setUpEffects(actions: Actions) {
    this.state.skip(1).zip(actions).subscribe(p => p[1].onSuccess(p[0]));
  }

  private nextBeerId(): number {
    return this.id++;
  }

  private stateFn(actions: Observable<Action>): Observable<AppState> {
    const r = actions.scan((state, v) => {
      if (v.type === 'add') {
        return {
          categories: state.categories,
          beers: this.reduceBeers(state.beers, v)
        };
      } else {
        return state;
      }
    }, initialState);
    return wrapIntoBehavior(initialState, r);
  }

  private reduceBeers(beers: Beer[], v: Action): Beer[] {
    if (v.type === 'add') {
      const newBeer = {
        id: this.nextBeerId(),
        categoryId: v.categoryId,
        name: v.payload.name,
        description: v.payload.description
      };
      return [...beers, newBeer];
    } else {
      return beers;
    }
  }
}

function wrapIntoBehavior(init, obs) {
  const res = new BehaviorSubject(init);
  obs.subscribe(s => res.next(s));
  return res;
}


