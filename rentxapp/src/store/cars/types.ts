export enum CarsTypes {
    GET_CARS_REQUEST = '@cars/GET_CARS_REQUEST',
    GET_CARS_SUCCESS = '@cars/GET_CARS_SUCCESS',
    GET_CARS_FAILURE = '@cars/GET_CARS_FAILURE',
    GET_CARS_RESULT_REQUEST = '@cars/GET_CARS_RESULT_REQUEST',
    GET_CARS_RESULT_SUCCESS = '@cars/GET_CARS_RESULT_SUCCESS',
    GET_CARS_RESULT_FAILURE = '@cars/GET_CARS_RESULT_FAILURE',
}

export interface ICarsInfo {
    id: string;
    name: string;
    brand: string;
    daily_value: number;
    image: string;
}

export interface ICarsState {
    readonly carsInfo: ICarsInfo[];
    readonly loading: boolean;
    readonly error: boolean;
    readonly results: ICarsInfo[];
}

export interface ICarsRequestPayload {
    start_date: string;
    end_date: string;
}

export interface ICarsRequest {
    type: typeof CarsTypes.GET_CARS_REQUEST;
    payload: ICarsRequestPayload
}

export interface ICarsFailure {
    type: typeof CarsTypes.GET_CARS_FAILURE;
}

export interface ICarsSuccess {
    type: typeof CarsTypes.GET_CARS_SUCCESS;
    payload: ICarsInfo[];
}

export interface ICarsResultRequest {
    type: typeof CarsTypes.GET_CARS_RESULT_REQUEST;
}

export interface ICarsResulFailure {
    type: typeof CarsTypes.GET_CARS_RESULT_FAILURE;
}

export interface ICarsResulSuccess {
    type: typeof CarsTypes.GET_CARS_RESULT_SUCCESS;
    payload: ICarsInfo[];
}

export type ICarsActions = 
    ICarsRequest | 
    ICarsFailure | 
    ICarsSuccess | 
    ICarsResultRequest |
    ICarsResulFailure | 
    ICarsResulSuccess ;