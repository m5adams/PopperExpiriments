import { StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';

import Colors from '../../constants/colors';
import FeedCard from '../../components/ui/FeedCard';

const AllNotificationsScreen = () => {
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

      <Text style={{color: 'white'}}>AllNotificationsScreen</Text>
    </ScrollView>
  );
};

export default AllNotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});