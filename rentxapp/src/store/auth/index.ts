import { IAuthActions, IAuthState, AuthTypes } from './types';

const initialState: IAuthState = {
    loading: false,
    error: false,
    isAuthenticated: false
};

export default function authReducer(
    state = initialState,
    action: IAuthActions
): IAuthState {
    switch(action.type) {
        case AuthTypes.GET_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                isAuthenticated: false,
            }
        case AuthTypes.GET_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                isAuthenticated: true,
            }
        case AuthTypes.GET_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                isAuthenticated: false,
            }
        case AuthTypes.GET_SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                isAuthenticated: false,
            }
        case AuthTypes.GET_SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                isAuthenticated: false,
            }
        case AuthTypes.GET_SIGN_UP_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                isAuthenticated: false,
            }
        case AuthTypes.GET_SIGN_OUT:
            return {
                ...state,
                loading: false,
                error: false,
                isAuthenticated: false,
            }
        default:
            return state;
    }
}