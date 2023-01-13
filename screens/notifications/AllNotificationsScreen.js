import { StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';

import Colors from '../../constants/colors';

const AllNotificationsScreen = () => {
  return (
    <ScrollView style={styles.container}>
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