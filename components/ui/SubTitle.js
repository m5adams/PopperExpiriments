import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View>
      <Text style={styles.loginText}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  loginText: {
    paddingLeft: 40,
    marginTop: 10,
    color: "white",
  },
});
