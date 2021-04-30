import {
    call,
    put,
    all,
    takeLatest,
    StrictEffect,
  } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../services/api';
import { CarsTypes, ICarsRequest, } from './types';

export function* getAvailability(action: ICarsRequest): Generator {
    try {
        const { start_date, end_date } = action.payload;

        const response = yield call(api.get, 'availability', {
            params: {
                start_date,
                end_date
            }
        });
        console.log(response)

        const { data } = (response as AxiosResponse);

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

export default function* carsSagas(): Generator<StrictEffect> {
    yield all([
      takeLatest(CarsTypes.GET_CARS_REQUEST, getAvailability),
    ]);
  }