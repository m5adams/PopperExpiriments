import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../../constants/colors";

import { USERS } from "../../data/dummy-data";

const NotificationCard = ({ item }) => {
  const userObj = USERS.find((data) => data.id === item.userId);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.elementContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={userObj.profilePic} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.previewText}>
            <Text style={styles.userName}>{userObj.fullName}</Text>
            {item.description}
            <Text style={styles.timeText}> {item.dateTime}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    // backgroundColor: Colors.primary400,
    paddingTop: 5,
    paddingBottom: 5,
  },
  elementContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: 70,
    height: 50,
    borderRadius: 100,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: "center",
  },
  textContainer: {
    justifyContent: "center",
    flex: 4,
  },
  userName: {
    color: "white",
    fontSize: 15,
    fontFamily: "QuicksandSemiBold",
  },
  timeText: {
    color: "white",
    fontSize: 12,
    fontFamily: "QuicksandLight",
  },
  previewText: {
    color: "white",
    fontSize: 14,
    fontFamily: "QuicksandMedium"
  },
});
