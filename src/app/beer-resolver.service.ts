import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Beer} from './models';
import {Observable} from 'rxjs/Observable';
import {DataService} from './data.service';

@Injectable()
export class BeerResolverService implements Resolve<Beer> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Beer> {
    return this.dataService.getBeer(route.params['name']);
  }


}
