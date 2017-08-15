import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Beer} from './models';
import {DataService} from './data.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BeersResolverService implements Resolve<Observable<Beer[]>> {

  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Beer[]>> {
    return this.dataService.getBeers(+route.parent.params['id'], route.parent.params['list']);
  }
}
