import { Injectable } from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  LOGIN_STARTED_ACTION, LOGIN_SUCCEEDED_ACTION, LoginFailedAction,
  LoginSucceededAction
} from './account-actions';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';

@Injectable()
export class AccountEffectsService {
  constructor(private actions$: Actions, private loginService: LoginService, private router: Router) {}

  @Effect() loginActionStarteds$: Observable<Action> = this.actions$
    .ofType(LOGIN_STARTED_ACTION)
    .do(action => console.log(action))
    .switchMap(action => this.loginService.login(action.payload))
    .do(result => console.log(result))
    .map(result => new LoginSucceededAction(result))
    .catch(error => Observable.of(new LoginFailedAction(error)));

  @Effect() loginActionsSucceeded$: Observable<any> = this.actions$
    .ofType(LOGIN_SUCCEEDED_ACTION)
    .do(action => console.log(action))
    .switchMap(() => this.router.navigate(['account']));
}
