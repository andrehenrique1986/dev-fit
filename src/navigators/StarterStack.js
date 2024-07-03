/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StarterIntro from '../screens/StarterIntro';
import StarterName from '../screens/StarterName';
import StarterDias from '../screens/StarterDias';

const Stack = createStackNavigator();

const StarterStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="StarterIntro" 
            component={StarterIntro} 
            options={{ headerShown: false }} 
            /> 
           <Stack.Screen 
            name="StarterName"
            component={StarterName}
            options={{ headerShown: true }}
           />
           <Stack.Screen 
            name="StarterDias"
            component={StarterDias}
            options={{ headerShown: true }}
           />
        </Stack.Navigator>
    );
}

export default StarterStack;