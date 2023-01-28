import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SmallBubbleButton } from "./SmallBubbleButton";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Animated from "react-native-reanimated";

const width = Dimensions.get("window").width;
const modalHeight = 250;
const SimpleModal = () => {
    
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };
  const tabBarHeight = useBottomTabBarHeight();
  return (
     <View style={styles.container}>
      <Pressable disabled={true}>
        <View style={styles.modal}>
          <View style={styles.textView}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.description}>Descripton</Text>
          </View>
        </View>
      </Pressable>
      <View>
      </View>
      <Pressable
        onPress={() => changeModalVisible(false)}
        style={[styles.button, { marginBottom: tabBarHeight }]}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/bubble.png")}
        />
        <Ionicons
          name="md-add"
          style={[styles.icon, { transform: [{ rotate: "45deg" }] }]}
          size={30}
          color="white"
        />
      </Pressable>
    </View> 
  );
  
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modal: {
    height: modalHeight,
    width: width - 60,
    paddingTop: 10,
    backgroundColor: "white",
    borderRadius: 25,
  },
  textView: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    borderBottomWidth: 2,
  },
  description: {
    fontSize: 14,
  },
  button: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    bottom: 0,
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

export { SimpleModal };
