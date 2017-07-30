import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Beer, Category} from '../models';
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/mergeAll';

@Component({
  selector: 'app-beer-categories',
  templateUrl: './beer-categories.component.html',
  styleUrls: ['./beer-categories.component.scss']
})
export class BeerCategoriesComponent {
  list: Observable<string>;
  categories: Observable<Category[]>;

  beers: Observable<Beer[]>;
  constructor(route: ActivatedRoute) {
    this.list = route.params.pluck('list');
    this.categories = (<any>route.data.pluck('categories')).mergeAll();
  }

}
