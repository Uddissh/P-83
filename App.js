import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from "./screens/Feed";
import CreateStory from "./screens/CreatePost";
import MaterialBottomTabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}