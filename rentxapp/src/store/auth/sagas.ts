import {
    call,
    put,
    all,
    takeLatest,
    StrictEffect,
  } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ILoginRequest, AuthTypes, ISignUpRequest } from './types';
import AuthService from '../../services/auth/authService';

export function* login(action: ILoginRequest): Generator {
    try {
        const response = yield call(AuthService.login, action);

        const { token } = (response as AxiosResponse).data;

        if (token) {
            AsyncStorage.setItem('token', token)
        }

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
        yield call(AuthService.signUp, action);

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