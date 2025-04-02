import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';

const Stack = createNativeStackNavigator();

function MyApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#513CCA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}>
        {routes.map(value => {
          return <Stack.Screen key={value.name} {...value} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;
