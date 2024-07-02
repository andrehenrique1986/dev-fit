/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/store';

// Importar o Stack

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Text>Olá !!! Olá !!! Olá !!!</Text>
    </PersistGate>
  </Provider>
);
