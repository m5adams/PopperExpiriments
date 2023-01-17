import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Colors from '../../constants/colors';
import FeedDivider from './FeedDivider';

const FeedCard = () => {
  return (
    <View style={styles.cardContainer}>

      <View style={styles.elementContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/images/mirai.png')}/>
        </View >

        {/* this view puts these elements in a column */}
        <View style={styles.textContainer}>

          {/* this view puts these two text elements in a row */}
          <View style={styles.headerContainer}>
            <Text style={styles.userName}>Matthew Niculae</Text>

            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>11:38 am</Text>
            </View>
          </View>

          <Text style={styles.previewText}>This is where a message would go slay!!</Text>
        </View>
      </View>

      <FeedDivider/>

    </View>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
  cardContainer: {
    // paddingTop: 18,
    alignItems: 'center',
  },
  elementContainer: {
    flexDirection: 'row'
  },
  imageContainer: {
    width: 70,
    height: 50,
    flex: 1
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center'
    // paddingRight: 20
  },
  textContainer: {
    // alignItems: 'center',
    flex: 4
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 8
  },
  userName: {
    flex: 2,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timeContainer: {
    flex: 1
  },
  timeText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.6
  },
  previewText: {
    color: 'white',
    fontSize: 12,
  },
});