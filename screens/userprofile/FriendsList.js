import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import { USERS } from "../../data/dummy-data";

const FriendsList = ({ navigation, route }) => {
  // const friendsList = route.params.friendsList;
  // console.log(friendsList);

  const friends = [];

  route.params.friendsList.forEach((friend) => {
    USERS.find((item) => {
      if (friend === item.id) {
        friends.push(item);
      }
    });
  });

  console.log(friends);

  console.log(friends[0].fullName);

  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <View>
            <Text>Friend: {console.log(item.fullName)}</Text>
            <Text style={{ color: "white" }}>{item.fullName}</Text>
            <Text>{item.bio}</Text>
          </View>
        )}
      />
      <Text>FriendsList</Text>
    </View>
  );
};

export default FriendsList;

const styles = StyleSheet.create({});
