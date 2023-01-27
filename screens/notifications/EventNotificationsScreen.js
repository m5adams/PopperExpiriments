import { StyleSheet, Text, ScrollView, FlatList, View } from "react-native";
import React from "react";

import Colors from "../../constants/colors";
import FeedCard from "../../components/ui/FeedCard";

const EventNotificationsScreen = () => {
  return (
    <ScrollView style={styles.container}>
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

export default EventNotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
