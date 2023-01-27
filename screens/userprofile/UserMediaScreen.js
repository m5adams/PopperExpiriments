import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";

import Colors from "../../constants/colors";
import FeedCard from "../../components/ui/FeedCard";

const UserMediaScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Heres the Users Media</Text>
      <View style={{ alignItems: "center" }}>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </View>
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
