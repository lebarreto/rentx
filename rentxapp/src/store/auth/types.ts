export enum AuthTypes {
    GET_LOGIN_REQUEST = '@auth/GET_LOGIN_REQUEST',
    GET_LOGIN_SUCCESS = '@auth/GET_LOGIN_SUCCESS',
    GET_LOGIN_FAILURE = '@auth/GET_LOGIN_FAILURE',
    GET_SIGN_UP_REQUEST = '@auth/GET_SIGN_UP_REQUEST',
    GET_SIGN_UP_SUCCESS = '@auth/GET_SIGN_UP_SUCCESS',
    GET_SIGN_UP_FAILURE = '@auth/GET_SIGN_UP_FAILURE',
    GET_SIGN_OUT = '@auth/GET_SIGN_OUT'

}

export interface IAuthState {
    readonly isAuthenticated: boolean;
    readonly loading: boolean;
    readonly error: boolean;
}

export interface ILoginRequestPayload {
    email: string;
    password: string;
}

export interface ISignUpRequestPayload {
    name: string;
    email: string;
    password: string;
    admin: boolean;
}

export interface ILoginRequest {
    type: typeof AuthTypes.GET_LOGIN_REQUEST;
    payload: ILoginRequestPayload
}

export interface ILoginFailure {
    type: typeof AuthTypes.GET_LOGIN_FAILURE;
}

export interface ILoginSuccess {
    type: typeof AuthTypes.GET_LOGIN_SUCCESS;
    token: string;
}

export interface ISignUpRequest {
    type: typeof AuthTypes.GET_SIGN_UP_REQUEST;
    payload: ISignUpRequestPayload
}

export interface ISignUpFailure {
    type: typeof AuthTypes.GET_SIGN_UP_FAILURE;
}

export interface ISignUpSuccess {
    type: typeof AuthTypes.GET_SIGN_UP_SUCCESS;
}

export interface ISignOut {
    type: typeof AuthTypes.GET_SIGN_OUT;
}

export type IAuthActions = 
    ILoginRequest | 
    ILoginFailure | 
    ILoginSuccess | 
    ISignUpRequest | 
    ISignUpSuccess | 
    ISignUpFailure |
    ISignOut;