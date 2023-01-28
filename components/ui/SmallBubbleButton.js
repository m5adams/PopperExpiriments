import React, { useState } from "react";
import { StyleSheet, Dimensions, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const SmallBubbleButton = () => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };
  const tabBarHeight = useBottomTabBarHeight(); 

  return (
    <Pressable onPress={() => changeModalVisible(true)} style={[styles.button, {bottom: tabBarHeight}]}>
      <Image
        style={styles.image}
        source={require("../../assets/images/bubble.png")}
      />
      <Ionicons name="add" style={styles.icon} size={30} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    right: 10,
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