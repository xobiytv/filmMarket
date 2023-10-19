import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Detailed from '../screen/detailed';
import Movie from '../screen/Movie';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Movie" component={Movie} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
