import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Beer} from '../models';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/mergeAll';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent {

  beer: Observable<Beer>;
  beers: Observable<Beer[]>;

  constructor(route: ActivatedRoute) {
    this.beers = (<any>route.data.pluck('beers')).mergeAll();
    this.beer = route.data.pluck('beer');
  }

}
