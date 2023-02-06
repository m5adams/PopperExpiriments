import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../../constants/colors";

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
              {userObj.fullName} @{userObj.userName}
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
    backgroundColor: Colors.accent500,
    borderWidth: 1,
    borderColor: Colors.primary400,
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
    borderRadius: 100,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 100,
  },
  textContainer: {
    flex: 4,
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  userName: {
    flex: 2,
    color: Colors.primary500,
    fontSize: 14,
    fontFamily: "QuicksandBold",
  },
  timeContainer: {
    flex: 1,
  },
  timeText: {
    color: Colors.primary500,
    fontSize: 12,
    fontFamily: "QuicksandLight"
  },
  previewText: {
    color: Colors.primary500,
    fontSize: 16,
    fontFamily: "QuicksandSemiBold",
  },
});
