import {
    call,
    put,
    all,
    takeLatest,
    StrictEffect,
  } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../services/api';
import { ILoginRequest, AuthTypes, ISignUpRequest } from './types';

export function* login(action: ILoginRequest): Generator {
    try {
        const { email, password } = action.payload;

        const response = yield call(api.post, 'auth', {
            email,
            password,
        });

        const { token } = (response as AxiosResponse).data;

        yield put({
            type: AuthTypes.GET_LOGIN_SUCCESS,
            token
        })
    } catch (error) {
        yield put({
            type: AuthTypes.GET_LOGIN_FAILURE,
        })
    }
}

export function* signUp(action: ISignUpRequest): Generator {
    try {
        const { name, email, password, admin } = action.payload;

        yield call(api.post, 'users', {
            name,
            email,
            password,
            admin
        });

        yield put({
            type: AuthTypes.GET_SIGN_UP_SUCCESS,
        })
    } catch (error) {
        yield put({
            type: AuthTypes.GET_SIGN_UP_FAILURE,
        })
    }
}

export function* signOut() {
}

export default function* authSagas(): Generator<StrictEffect> {
    yield all([
      takeLatest(AuthTypes.GET_LOGIN_REQUEST, login),
      takeLatest(AuthTypes.GET_SIGN_UP_REQUEST, signUp),
      takeLatest(AuthTypes.GET_SIGN_OUT, signOut),
    ]);
  }