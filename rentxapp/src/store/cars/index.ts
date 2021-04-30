import { ICarsActions, ICarsState, CarsTypes } from './types';

const initialState: ICarsState = {
    carsInfo: [],
    loading: false,
    error: false,
};

export default function CarsReducer(
    state = initialState,
    action: ICarsActions
): ICarsState {
    switch(action.type) {
        case CarsTypes.GET_CARS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case CarsTypes.GET_CARS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                carsInfo: action.payload,
            }
        case CarsTypes.GET_CARS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state;
    }
}