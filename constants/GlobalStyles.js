import { StyleSheet, Platform, StatusBar } from "react-native";

import Colors from "./colors";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: Colors.primary500,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
