import { StyleSheet, Text, FlatList, ScrollView, View } from "react-native";
import React from "react";

import Colors from "../../constants/colors";
import FeedCard from "../../components/ui/FeedCard";

const PopsNotificationScreen = () => {
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

export default PopsNotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
