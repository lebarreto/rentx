import { all, fork, StrictEffect } from 'redux-saga/effects';

import auth from './auth/sagas'
import cars from './cars/sagas'

export default function* rootSaga(): Generator<StrictEffect> {
    return yield all([
        fork(auth),
        fork(cars)
    ])
}