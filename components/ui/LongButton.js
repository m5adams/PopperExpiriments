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
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;
const buttonHeight = 100;

const LongButton = ({ closeModal }) => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <Pressable onPress={closeModal} style={[styles.button]}>
      <LinearGradient
        // Button Linear Gradient
        colors={["rgb(248, 131, 121)", "rgba(248, 131, 121, 0.9)"]}
        style={[styles.gradient]}
      >
        <Text style={styles.text}>Post</Text>
      </LinearGradient>
    </Pressable>
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
