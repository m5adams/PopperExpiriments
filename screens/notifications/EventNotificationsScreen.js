import { StyleSheet, Text, ScrollView, FlatList, View } from "react-native";
import React from "react";

import Colors from "../../constants/colors";
import FeedCard from "../../components/ui/FeedCard";
import { NOTIFICATIONS } from "../../data/dummy-data";

const EventNotificationsScreen = () => {
  return (
    <FlatList
      data={NOTIFICATIONS}
      renderItem={({ item }) => <FeedCard item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default EventNotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
