import { ICarsActions, CarsTypes, ICarsRequestPayload, ICarsInfo } from './types';

export const getCarsAvailabilityRequest = (
    payload: ICarsRequestPayload
): ICarsActions => ({
    type: CarsTypes.GET_CARS_REQUEST,
    payload
});

export const getCarsAvailabilitySuccess = (payload: ICarsInfo[]): ICarsActions => ({
    type: CarsTypes.GET_CARS_SUCCESS,
    payload,
});

export const getCarsAvailabilityFailure = (): ICarsActions => ({
    type: CarsTypes.GET_CARS_FAILURE,
});