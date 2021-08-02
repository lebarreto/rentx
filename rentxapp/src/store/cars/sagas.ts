import {
    call,
    put,
    all,
    takeLatest,
    StrictEffect,
    ForkEffect,
    AllEffect,
  } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { CarsTypes, ICarsRequest} from './types';
import CarsService from '../../services/cars/carsService';

export function* getAvailability(action: ICarsRequest): Generator<StrictEffect> {
    try {
        const response = yield call(CarsService.getCarsAvailability, action)

        const { data } = response as AxiosResponse;

        yield put({
            type: CarsTypes.GET_CARS_SUCCESS,
            payload: data
        })
    } catch (error) {
        yield put({
            type: CarsTypes.GET_CARS_FAILURE,
        })
    }
}

export function* getCars(): Generator<StrictEffect> {
    try {
        const response = yield call(CarsService.getCars);
        const { data } = (response as AxiosResponse);

        yield put({
            type: CarsTypes.GET_CARS_RESULT_SUCCESS,
            payload: data
        })
    } catch (error) {
        yield put({
            type: CarsTypes.GET_CARS_RESULT_FAILURE,
        })
    }
}

export default function* carsSagas(): Generator<AllEffect<ForkEffect>> {
    yield all([
      takeLatest(CarsTypes.GET_CARS_REQUEST, getAvailability),
      takeLatest(CarsTypes.GET_CARS_RESULT_REQUEST, getCars),
    ]);
  }