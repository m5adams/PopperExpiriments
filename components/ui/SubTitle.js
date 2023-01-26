import React from "react";
import { StyleSheet, Text } from "react-native";

const SubTitle = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default SubTitle;

const styles = StyleSheet.create({
  text: {
    paddingLeft: 40,
    marginTop: 10,
    color: "white",
  },
});
