import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import CreateAccount from './screens/CreateAccount';
import LoginScreen2 from './screens/LoginScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import Colors from './constants/colors';
import KeyboardComponent from './components/functionality/KeyboardComponent';
// import NavigationBar from './components/NavigationBar';
// import Background from './components/Background';

export default function App() {
  return (
    //<Background style={styles.rootScreen}>
    <KeyboardComponent>
      <SafeAreaView style={styles.rootScreen}>
        <LoginScreen />
      </SafeAreaView>
    </KeyboardComponent>
    //</Background>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});



//Junkyard

{/* <Background style={styles.rootScreen}> </Background> */}