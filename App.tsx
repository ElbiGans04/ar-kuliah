import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './routes';
import React from 'react';

function MyApp() {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}

export default MyApp;
