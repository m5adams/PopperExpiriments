import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../../constants/colors';

const UserFeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heres the Users Feed</Text>
    </View>
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