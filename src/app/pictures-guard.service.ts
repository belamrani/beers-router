import {Injectable} from '@angular/core';
import {CanLoad, Route} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {ConfirmationService} from 'primeng/components/common/api';

@Injectable()
export class PicturesGuardService implements CanLoad {

  constructor(public confirmationService: ConfirmationService) {
  }

  canLoad(route: Route) {
    return Observable.create((observer: Observer<boolean>) => {
      this.confirmationService.confirm({
        message: 'Do you really want to see pictures of beers ?',
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
