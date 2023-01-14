import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Colors from '../../constants/colors';
import FeedDivider from './FeedDivider';

const FeedCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image}/>
      </View >

      <View style={styles.headerContainer}>
        <Text style={styles.userName}>Mattew Niculae</Text>

        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>11:38 am</Text>
        </View>
      </View>

      <Text style={styles.previewText}>This is where a message would go slay!!</Text>

      <FeedDivider/>

    </View>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 18
  },
  imageContainer: {
  
  },
  image: {
  
  },
  headerContainer: {
    flexDirection: 'row',
  },
  userName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timeContainer: {

  },
  timeText: {
    color: 'white',
    fontSize: 12,
  },
  previewText: {
    color: 'white',
    fontSize: 12,
  },
});