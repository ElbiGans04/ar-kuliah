import AboutView from 'views/about';
import ArView from 'views/ar';
import HelpView from 'views/help';
import HomeView from 'views/home';
import MateriView from 'views/materi';
import MateriDetailView from 'views/materi/detail';
import QuizView from 'views/quiz';
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
          component={HomeView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={AboutView}
          options={{title: 'Tentang Aplikasi'}}
        />
        <Stack.Screen
          name="Help"
          component={HelpView}
          options={{title: 'Panduan Aplikasi'}}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizView}
          options={{title: 'Quiz Aplikasi'}}
        />
        <Stack.Screen
          name="Materi"
          component={MateriView}
          options={{title: 'Pembahasan'}}
        />
        <Stack.Screen
          name="MateriDetail"
          component={MateriDetailView}
          options={{title: 'Pembahasan'}}
        />
        <Stack.Screen name="Ar" component={ArView} />
        {/* End Screen List */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
