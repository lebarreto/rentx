import { AxiosPromise } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ICarsRequest } from '../../store/cars/types';
import api from '../api';

const token = AsyncStorage.getItem('token');

const CarsService = {
    getCars: (): AxiosPromise => {
        return api.get('cars', {
            headers: { Authorization: `Bearer ${token._W}`}
        })
    },
    getCarsAvailability: (availability: ICarsRequest): AxiosPromise => {
        return api.get('availability', {
            params: {
                start_date: `'${availability.payload.start_date}'`,
                end_date: `'${availability.payload.end_date}'`,
            },
            headers: { Authorization: `Bearer ${token._W}`}
        })
    }
}

export default CarsService; 