import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

import Colors from "../../constants/colors";
import FeedCard from "../../components/ui/FeedCard";

const UserFeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heres the Users Feed</Text>
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
    </View>
  );
};

export default UserFeedScreen;

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
