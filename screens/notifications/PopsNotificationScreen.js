import { StyleSheet, Text, FlatList, ScrollView, View } from "react-native";
import React from "react";

import Colors from "../../constants/colors";
import FeedCard from "../../components/ui/FeedCard";
import { NOTIFICATIONS } from "../../data/dummy-data";

const PopsNotificationScreen = () => {
  return (
    <FlatList
      data={NOTIFICATIONS}
      renderItem={({ item }) => <FeedCard item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default PopsNotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
