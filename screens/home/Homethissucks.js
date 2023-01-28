import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Pressable,
  Image,
  Modal,
  Text,
  useWindowDimensions,
  Animated,
  ImageBackground,
} from "react-native";
import ActionButton from "react-native-circular-action-menu";
import { Ionicons } from "@expo/vector-icons";

import { SimpleModal } from "../../components/ui/SimpleModal";
import FeedCard from "../../components/ui/FeedCard";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };

  const animation = new Animated.Value(isModalVisible ? 0 : 1);
  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={{ backgroundColor: Colors.primary500 }}>
          <Title>Timeline</Title>
        </View>
        <View style={{ alignItems: "center" }}>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </View>
      </ScrollView>
      {/*  <Pressable onPress={() => changeModalVisible(true)}>
        <Animated.View style={[styles.image, rotation]}>
          <Image
            style={[styles.image]}
            source={require("../../assets/images/bubble.png")}
          />
          <Icon ios="ios-add" android="md-add" containerStyle={styles.plus} />
        </Animated.View>
      </Pressable> */}
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : [])}
        onPress={() => onPress()}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/bubble.png")}
        />
        <Ionicons name="add" style={styles.plus} size={40} color="white" />
      </Pressable>

      {/*   <Pressable onPress={() => changeModalVisible(false)}>
        <Image
          style={[styles.image]}
          source={require("../../assets/images/bubble.png")}
        />
        <Ionicons name="add" style={styles.plus} size={40} />
      </Pressable> */}

      {/*   <Pressable onPress={() => changeModalVisible(false)}>
        <Animated.View style={[styles.image, rotation]}>
          <Image
            style={[styles.image]}
            source={require("../../assets/images/bubble.png")}
          />
          <Icon ios="ios-add" android="md-add" />
        </Animated.View>
      </Pressable> */}

      <Modal
        style={styles.modal}
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisible(false)}
      >
        <SimpleModal />
      </Modal>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingHorizontal: 50,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  image: {
    position: "absolute",
    right: 10,
    bottom: 10,
    height: 80,
    width: 65,
  },
  text: {
    position: "absolute",
    alignItems: "flex-end",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    right: 33.5,
    bottom: 33,
  },
  pressed: {
    opacity: 0.8,
  },
  plus: {},
});
