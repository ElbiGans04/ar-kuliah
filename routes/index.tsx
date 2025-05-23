import AboutView from 'views/about';
import ArView from 'views/ar';
import HelpView from 'views/help';
import HomeView from 'views/home';
import MateriView from 'views/materi';
import MateriDetailView from 'views/materi/detail';
import QuizView from 'views/quiz/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import QuizDetailView from 'views/quiz/detail';
import BootSplash from 'react-native-bootsplash';

export type ScreenType = {
  Home: undefined;
  About: undefined;
  Help: undefined;
  Quiz: undefined;
  QuizDetail: undefined;
  Materi: undefined;
  MateriDetail: {
    type: 'rusa' | 'kucing' | 'kuda' | 'dog' | 'chiken' | 'elephant';
  };
  Ar: {
    type: 'rusa' | 'kucing' | 'kuda' | 'dog' | 'chiken' | 'elephant';
    imageTracking: boolean;
  };
};

const Stack = createNativeStackNavigator<ScreenType>();

export default function Routes() {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#0A3180',
          headerTitleStyle: {
            fontWeight: 'bold',
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
          options={{title: 'Panduan'}}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizView}
          options={{title: 'Quiz'}}
        />
        <Stack.Screen
          name="QuizDetail"
          component={QuizDetailView}
          options={{title: 'Quiz'}}
        />
        <Stack.Screen
          name="Materi"
          component={MateriView}
          options={{title: 'Materi'}}
        />
        <Stack.Screen
          name="MateriDetail"
          component={MateriDetailView}
          options={{title: 'Materi'}}
        />
        <Stack.Screen name="Ar" component={ArView} />
        {/* End Screen List */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
