import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {Beer} from '../models';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent  {

  beers: Observable<Beer[]>;

  constructor(route: ActivatedRoute) {
    this.beers = (<any>route.data.pluck('beers')).mergeAll();
  }

}
