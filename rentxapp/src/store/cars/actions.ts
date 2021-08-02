import { ICarsActions, CarsTypes, ICarsRequestPayload } from './types';

export const getCarsAvailabilityRequest = (
    payload: ICarsRequestPayload
): ICarsActions => ({
    type: CarsTypes.GET_CARS_REQUEST,
    payload
});

export const getCarsRequest = (): ICarsActions => ({
    type: CarsTypes.GET_CARS_RESULT_REQUEST,
});