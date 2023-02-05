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
      transparent={true}
      animationType="fade"
      isVisible={visible}
      onRequestClose={closeModal}
      coverScreen={false}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <View style={styles.textContainer}> 
          <View style={styles.titleView}>
            <Text style={styles.header}>Title</Text>
            <Text style={styles.title}>Going to WATERBAR</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.textView}>
            <Text style={styles.header}>Descripton</Text>
            <Text style={styles.description}>
              come to PB tonight to go to waterbar!
            </Text>
          </View>
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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    height: "35%",
    width: width - 60,
    backgroundColor: "white",
    borderRadius: 25,
    zIndex: 0,
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: "10%",
    paddingVertical: "5%",
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontSize: 16
  },
  title: {
    fontSize: 18,
    paddingHorizontal: "5%"
  },
  description: {
    fontSize: 18,
  },
  line: {
    borderBottomColor: "rgba(114, 109, 109, 0.3)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: width - 60,
    alignSelf: "center",
    marginVertical: "5%"
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,
    paddingBottom: 10,
  },
  cornerIcons: {
    paddingRight: 5,
  },
});

export default SimpleModal;
