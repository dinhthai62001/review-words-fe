import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ScreenName} from '@/config/ScreenName';
import Home from '@/screen/Home';
import DetailHome from '@/screen/DetaiScreen';
import FlashCard from '@/screen/FlashCardScreen';
import Login from '@/screen/Auth/Login';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: 26,
          },
        }}
        initialRouteName={ScreenName.Home}>
        <Stack.Screen
          name={ScreenName.Home}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ScreenName.DetailHome}
          component={DetailHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ScreenName.FlashCard}
          component={FlashCard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ScreenName.Login}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
