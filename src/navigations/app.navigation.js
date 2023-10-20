import * as React from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
// import detailed from '../screen/detailed';
import Ionicons  from 'react-native-vector-icons/Ionicons'
import Movie from '../screen/Movie';


const Tab = createBottomTabNavigator();
export default function tabNavigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
               
                let iconName;

                if(route.name === 'Home'){
                    iconName = focused ? 'home' :  'home-outline'
                }else if (route.name === 'Detailed'){
                    iconName = focused ? 'settings' : 'settings-outline'
                }

                return (
                    <Ionicons name={iconName} color={color} size={size} />
                )
            },
            tabBarActiveTintColor: 'orange',
            // tabBarInactiveTintColor: 'red',
            // tabBarInactiveBackgroundColor: 'black'
        })}>
            <Tab.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Tab.Screen name='Movie' component={Movie}  options={{headerShown: false, tabBarBadge: 12}} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
