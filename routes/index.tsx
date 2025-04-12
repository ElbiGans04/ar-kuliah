import About from 'views/about';
import Ar from 'views/ar';
import Help from 'views/help';
import Home from 'views/home';
import Materi from 'views/materi';
import MateriDetail from 'views/materi/detail';
import Quiz from 'views/quiz';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

export type ScreenType = {
  Home: undefined,
  About: undefined,
  Help: undefined,
  Quiz: undefined,
  Materi: undefined,
  MateriDetail: {
    type: 'rusa' | 'kucing' | 'kuda';
  },
  Ar: {
    type: 'rusa' | 'kucing' | 'kuda';
  }
}

const Stack = createNativeStackNavigator<ScreenType>();

export default function Routes() {
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
        {/* Screen List */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{title: 'Tentang Aplikasi'}}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{title: 'Panduan Aplikasi'}}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{title: 'Quiz Aplikasi'}}
        />
        <Stack.Screen
          name="Materi"
          component={Materi}
          options={{title: 'Pembahasan'}}
        />
        <Stack.Screen
          name="MateriDetail"
          component={MateriDetail}
          options={{title: 'Pembahasan'}}
        />
        <Stack.Screen name="Ar" component={Ar} />
        {/* End Screen List */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
