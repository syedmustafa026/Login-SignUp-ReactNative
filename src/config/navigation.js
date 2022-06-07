import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/signup';
import Signin from '../screens/signin';
import Home from '../screens/home';
import MapViews from '../screens/map';
import { Provider } from 'react-redux';
import { Store } from '../redux/store';
const Stack = createNativeStackNavigator();


function Navigation() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Maps" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Maps" component={MapViews} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default Navigation;