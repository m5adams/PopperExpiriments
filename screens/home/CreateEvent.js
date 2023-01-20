import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";

import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import FormInput from "../../components/ui/FormInput";

const CreateEvent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Title>Create Event</Title>

            <Text style={styles.subTitle}>Title</Text>

            <FormInput placeholderText={"Title"} />

            <Text style={styles.subTitle}>Location</Text>

            <FormInput placeholderText={"Location"} />

            <Text style={styles.subTitle}>Date & Time</Text>

            <FormInput placeholderText={"Date"} />
            <FormInput placeholderText={"Time"} />

            <Text style={styles.subTitle}>Description</Text>
            <FormInput
              placeholderText={"Description"}
              multiline
              numberOfLines={4}
              maxLength={80}
            />
            <Text style={styles.subTitle}>Invite Poppers</Text>
            <FormInput placeholderText={"Invite Them"} />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : [])}
        onPress={() => setModalVisible(true)}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/bubble.png")}
        />
        <Text style={styles.text}>+</Text>
      </Pressable>
    </>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.primary700,
  },
  modalView: {
    flex: 1,
    // alignItems: "center",
    marginTop: 20,
  },
  subTitle: {
    color: "white",
    fontSize: 14,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
});
