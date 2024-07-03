/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StarterIntro from '../screens/StarterIntro';

const Stack = createStackNavigator();

const StarterStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="StarterIntro" component={StarterIntro} />
        </Stack.Navigator>
    );
}

export default StarterStack;