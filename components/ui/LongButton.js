import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
  Dimensions,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import GradientButton from "react-native-gradient-buttons";
const width = Dimensions.get("window").width;
const buttonHeight = 100;

const LongButton = ({ closeModal }) => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <GradientButton
      style={{ marginVertical: 8 }}
      text="Gradient Button #1"
      textStyle={{ fontSize: 20 }}
      gradientBegin="#874f00"
      gradientEnd="#f5ba57"
      gradientDirection="diagonal"
      height={60}
      width={300}
      radius={15}
      impact
      impactStyle="Light"
      onPressAction={() => alert("You pressed me!")}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: width - 60,
    height: 50,
  },
  text: {
    textAlign: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default LongButton;
