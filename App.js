import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Colors from './constants/colors';
import StackNavigator from './navigation/Stack';

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});



//Junkyard

{/* <Background style={styles.rootScreen}> </Background> */ }