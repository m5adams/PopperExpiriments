import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';

const NavigationBar = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Profile: ProfileScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#fff',
      },
    },
  }
);

export default NavigationBar;