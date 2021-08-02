import { AxiosPromise } from 'axios';
import { ILoginRequest, ISignUpRequest } from '../../store/auth/types';
import api from '../api';

const AuthService = {
    login: (action: ILoginRequest): AxiosPromise => {
        const { email, password } = action.payload;

        return api.post('auth', {
            email,
            password,
        })
    },
    signUp: (action: ISignUpRequest): AxiosPromise => {
        const { name, email, password, admin } = action.payload;

        return api.post('users', {
            name,
            email,
            password,
            admin
        })
    },
}

export default AuthService;