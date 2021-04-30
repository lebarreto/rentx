import { IAuthActions, ILoginRequestPayload, AuthTypes, ISignUpRequestPayload } from './types';

export const loginRequest = (
    payload: ILoginRequestPayload
): IAuthActions => ({
    type: AuthTypes.GET_LOGIN_REQUEST,
    payload
});

export const loginSuccess = (token: string): IAuthActions => ({
    type: AuthTypes.GET_LOGIN_SUCCESS,
    token,
});

export const loginFailure = (): IAuthActions => ({
    type: AuthTypes.GET_LOGIN_FAILURE,
});

export const signUpRequest = (
    payload: ISignUpRequestPayload
): IAuthActions => ({
    type: AuthTypes.GET_SIGN_UP_REQUEST,
    payload
});

export const signUpSuccess = (): IAuthActions => ({
    type: AuthTypes.GET_SIGN_UP_SUCCESS,
});

export const signUpFailure = (): IAuthActions => ({
    type: AuthTypes.GET_SIGN_UP_FAILURE,
});

export const signOut = (): IAuthActions => ({
    type: AuthTypes.GET_SIGN_OUT,
});