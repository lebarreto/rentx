export enum CarsTypes {
    GET_CARS_REQUEST = '@cars/GET_CARS_REQUEST',
    GET_CARS_SUCCESS = '@cars/GET_CARS_SUCCESS',
    GET_CARS_FAILURE = '@cars/GET_CARS_FAILURE'
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

export type ICarsActions = 
    ICarsRequest | 
    ICarsFailure | 
    ICarsSuccess;