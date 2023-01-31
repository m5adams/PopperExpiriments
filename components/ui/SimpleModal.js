import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import LongButton from "./LongButton";

const width = Dimensions.get("window").width;
const SimpleModal = ({ closeModal, visible }) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <Modal
      style={styles.modal}
      transparent={true}
      animationType="fade"
      isVisible={visible}
      onRequestClose={closeModal}
      coverScreen={false}
    >
      <Pressable disabled={true}>
        <View style={styles.modalContent}>
          <View style={styles.textView}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.description}>Descripton</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Ionicons
              name="calendar-outline"
              size={24}
              color="#8E8B8B"
              style={styles.cornerIcons}
            />
            <Ionicons
              name="location-outline"
              size={24}
              color="#8E8B8B"
              style={styles.cornerIcons}
            />
            <Ionicons
              name="add"
              size={24}
              color="#8E8B8B"
              style={styles.cornerIcons}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({ 
  modal: {
    position: "absolute",
    flex: 0,
    alignSelf: "center",
    alignItems: "center",
    height: "35%",
    width: width - 60,
    backgroundColor: "white",
    borderRadius: 25,
    zIndex: 0,
    margin: 0,
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
  image: {
    height: 80,
    width: 65,
  },
  iconsContainer: {
    flexDirection: "row",
    paddingRight: 10,
    paddingBottom: 10,
  },
  cornerIcons: {
    paddingRight: 5,
  },
  modalContent: {
    flex: 1,
  },
});

export default SimpleModal;
