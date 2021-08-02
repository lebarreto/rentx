import { StatusBar } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './src/routes/routes';
import './src/config/ReactotronConfig';
import {store, persistor} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
        <StatusBar barStyle="light-content" translucent />
      </PersistGate>
    </Provider>
  );
}
