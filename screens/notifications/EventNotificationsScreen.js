import { StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import React from 'react';

import Colors from '../../constants/colors';
import FeedCard from '../../components/ui/FeedCard';

const EventNotificationsScreen = () => {
  return (
    <ScrollView style={styles.container}> 
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
      <FeedCard />

      <Text style={{color: 'white'}}>EventNotificationsScreen</Text>
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