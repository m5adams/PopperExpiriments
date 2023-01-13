import { StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import React from 'react';

import Colors from '../../constants/colors';

const EventNotificationsScreen = () => {
  return (
    <ScrollView style={styles.container}> 
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