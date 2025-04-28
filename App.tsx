import React, {StrictMode} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './routes';

function MyApp() {
  return (
    <StrictMode>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </StrictMode>
  );
}

export default MyApp;
