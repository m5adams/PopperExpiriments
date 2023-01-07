import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import CreateAccount from './screens/CreateAccount';
import ForgotPassword from './screens/ForgotPassword';
import UserProfileScreen from './screens/UserProfileScreen';
import Colors from './constants/colors';
import KeyboardComponent from './components/functionality/KeyboardComponent';
// import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <KeyboardComponent>
      <SafeAreaView style={styles.rootScreen}>
        <CreateAccount />
      </SafeAreaView>
    </KeyboardComponent>
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