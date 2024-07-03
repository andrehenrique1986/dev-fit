/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import StarterStack from './StarterStack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="StarterStack" component={StarterStack} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
