import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'rentxapp',
      storage: AsyncStorage,
      whitelist: ['auth', 'cars'],
    },
    reducers
  );

  return persistedReducer;
};