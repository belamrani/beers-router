import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Beer, Category} from './models';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import {Store} from '@ngrx/store';
import {State} from './store/reducer';

@Injectable()
export class DataService {

  constructor(public store: Store<State>) {
  }

  getCategories(): Observable<Observable<Category[]>> {
    return of(this.store.select(state => state.beerstate.categories));
  }

  getCategory(id: number): Observable<Category> {
    return this.store.select(state => state.beerstate.categories.filter(c => c.id === id)[0]).first();
  }

  getBeers(categoryId: number, list: string): Observable<Observable<Beer[]>> {
    return of(this.store.select(state => state.beerstate.beers.filter(m => (m.categoryId === categoryId) && (m.list === list))));
  }

  getBeer(name: string): Observable<Beer> {
    return this.store.select(state => state.beerstate.beers.filter(m => m.name === name)[0]).first();
  }
}


