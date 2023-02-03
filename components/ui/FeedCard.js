import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../../constants/colors";
import FeedDivider from "./FeedDivider";

import { USERS } from "../../data/dummy-data";

const FeedCard = ({ item }) => {
  const userObj = USERS.find((data) => data.id === item.userId);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.elementContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={userObj.profilePic} />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.userName}>
              {userObj.fullName} {userObj.userName}
            </Text>

            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{item.dateTime}</Text>
            </View>
          </View>

          <Text style={styles.previewText}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 18,
    width: "90%",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: Colors.primary400,
    borderRadius: 20,
    paddingBottom: 30,
  },
  elementContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: 70,
    height: 50,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
    // paddingRight: 20
  },
  textContainer: {
    // alignItems: 'center',
    flex: 4,
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  userName: {
    flex: 2,
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  timeContainer: {
    flex: 1,
  },
  timeText: {
    color: "white",
    fontSize: 12,
    opacity: 0.6,
  },
  previewText: {
    color: "white",
    fontSize: 12,
  },
});
