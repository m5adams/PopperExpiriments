import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import Colors from '../../constants/colors';

const UserFeedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Heres the Users Feed</Text>
    </ScrollView>
  );
};

export default UserFeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '300',
    fontSize: 32
  },
});