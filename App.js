import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import UserProfileScreen from './screens/UserProfileScreen';
// import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NavigationBar /> */}
      <UserProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d2782',
    flex: 1
  },
});