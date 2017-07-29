import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {ConfirmationService} from 'primeng/primeng';

@Injectable()
export class MajorGuardService implements CanActivate {

  constructor(public confirmationService: ConfirmationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Observable.create((observer: Observer<boolean>) => {
      console.log(route.params.name);
      this.confirmationService.confirm({
        message: 'Do you really want to see the description of the ' + route.params.name +  ' ?',
        accept: () => {
          observer.next(true);
          observer.complete();
        },
        reject: () => {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }

}
