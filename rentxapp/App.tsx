import { StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Router from './src/routes/routes';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
      <StatusBar barStyle="light-content" translucent />
    </Provider>
  );
}
