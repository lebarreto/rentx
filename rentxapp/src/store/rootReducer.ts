import { combineReducers } from 'redux';

import { IAuthState } from './auth/types';
import auth from './auth'

import { ICarsState } from './cars/types';
import cars from './cars'

export interface ApplicationState {
    auth: IAuthState;
    cars: ICarsState
}

export default combineReducers({
    auth,
    cars
})