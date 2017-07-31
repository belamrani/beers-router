import {Injectable} from '@angular/core';
import {ConfirmationService} from 'primeng/components/common/api';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {ComposeComponent} from './compose/compose.component';

@Injectable()
export class ComposeDeactivateGuardService implements CanDeactivate<ComposeComponent> {

  constructor(public confirmationService: ConfirmationService) {
  }

  canDeactivate(component: ComposeComponent, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {
    if (!component.cancel) {
      return true;
    }
    return Observable.create((observer: Observer<boolean>) => {
      this.confirmationService.confirm({
        message: 'You sure, no need to add a new ?',
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
