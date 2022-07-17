import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from '../scenes/HomeView';
import DetailsView from '../scenes/DetailsView';
import CreateView from '../scenes/CreateView';

const Stack = createNativeStackNavigator();

const AppStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeView" component={HomeView} />
      <Stack.Screen name="DetailsView" component={DetailsView} />
      <Stack.Screen name="CreateView" component={CreateView} />
    </Stack.Navigator>
  );
};

export default AppStack;
