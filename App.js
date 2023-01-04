import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import LoginScreen2 from './screens/LoginScreen2';
import UserProfileScreen from './screens/UserProfileScreen';
import Colors from './constants/colors';
import HideKeyboard from './components/functionality/HideKeyboard';
// import NavigationBar from './components/NavigationBar';
//import Background from './components/Background';

export default function App() {
  return (
    //<Background style={styles.rootScreen}>
    <HideKeyboard>
      <SafeAreaView style={styles.rootScreen}>
        <LoginScreen2 />
      </SafeAreaView>
    </HideKeyboard>
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