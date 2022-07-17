import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const RootStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
