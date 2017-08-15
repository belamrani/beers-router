import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Category} from './models';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoriesResolverService implements Resolve<Observable<Category[]>> {

  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Category[]>> {
    return this.dataService.getCategories();
  }
}
