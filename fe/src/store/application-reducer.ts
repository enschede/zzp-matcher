import {ActionReducer, combineReducers} from '@ngrx/store';
import {ApplicationState} from './application-state';
import {account} from './account/account-reducer';
import {profile} from './profile/profile-reducer';

export const application: ActionReducer<ApplicationState> = combineReducers({account, profile});
