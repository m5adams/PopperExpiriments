import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";

import Colors from "../../constants/colors";

const UserMediaScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Heres the Users Media</Text>
    </ScrollView>
  );
};

export default UserMediaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "300",
    fontSize: 32,
  },
});
