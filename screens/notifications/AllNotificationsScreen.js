import { StyleSheet, FlatList, View } from "react-native";
import React from "react";

import Colors from "../../constants/colors";
import NotificationCard from "../../components/ui/NotificationCard";
import { NOTIFICATIONS } from "../../data/dummy-data";

const AllNotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={NOTIFICATIONS}
        renderItem={({ item }) => <NotificationCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AllNotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
