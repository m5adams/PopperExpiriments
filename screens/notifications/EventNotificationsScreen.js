import { StyleSheet, Text, ScrollView, FlatList, View } from "react-native";
import React from "react";

import Colors from "../../constants/colors";
import NotificationCard from "../../components/ui/NotificationCard";
import { NOTIFICATIONS } from "../../data/dummy-data";

const EventNotificationsScreen = () => {
  const popNotifs = NOTIFICATIONS.filter((notif) => {
    return notif.notificationType === "event";
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={popNotifs}
        renderItem={({ item }) => <NotificationCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default EventNotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
