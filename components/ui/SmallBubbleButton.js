import React, { useState } from "react";
import { StyleSheet, Dimensions, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const SmallBubbleButton = ( { onPress,  isModalVisible } ) => {
  const tabBarHeight = useBottomTabBarHeight(); 

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Image
        style={styles.image}
        source={require("../../assets/images/bubble.png")}
      />
       <Ionicons
          name="add"
          style={[
            styles.icon,
            isModalVisible ? { transform: [{ rotate: "45deg" }] } : styles.icon,
          ]}
          size={30}
          color="white"
        />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    bottom: 10,
    zIndex: 10
  },
  icon: {
    position: "absolute",
    justiftyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 65,
  },
});

export { SmallBubbleButton };