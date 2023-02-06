import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Font from 'expo-font';

import StackNavigator from "./navigation/Stack";

let customFonts = {
  QuicksandLight: require('./assets/fonts/Quicksand-Light.ttf'),
  QuicksandRegular: require('./assets/fonts/Quicksand-Regular.ttf'),
  QuicksandMedium: require('./assets/fonts/Quicksand-Medium.ttf'),
  QuicksandSemiBold: require('./assets/fonts/Quicksand-SemiBold.ttf'),
  QuicksandBold: require('./assets/fonts/Quicksand-Bold.ttf'),
  RubikLight: require('./assets/fonts/Rubik-Light.ttf'),
  RubikRegular: require('./assets/fonts/Rubik-Regular.ttf'),
  RubikMedium: require('./assets/fonts/Rubik-Medium.ttf'),
  RubikSemiBold: require('./assets/fonts/Rubik-SemiBold.ttf'),
  RubikBold: require('./assets/fonts/Rubik-Bold.ttf'),
  RubikExtraBold: require('./assets/fonts/Rubik-ExtraBold.ttf'),
}
export default function App() {
  const [isReady,setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      Font.loadAsync(customFonts).then(() => {
        setIsReady(true)
      }).catch(console.error);
    }
      },[isReady])

  if (isReady) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    );
  }
}
