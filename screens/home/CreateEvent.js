import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import Modal from "react-native-modal";
import GestureRecognizer from "react-native-swipe-gestures";

import Title from "../../components/ui/Title";
import SubTitle from "../../components/ui/SubTitle";
import FormInput from "../../components/ui/FormInput";
import PoppersDropdown from "../../components/ui/PoppersDropdown";

const CreateEvent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <GestureRecognizer
        style={{ flex: 1 }}
        onSwipeDown={() => setModalVisible(false)}
      >
        <View style={{ flex: 1 }}>
          <Modal isVisible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Title>Create Event</Title>

                <SubTitle>Title</SubTitle>

                <FormInput placeholderText={"Title"} />

                <SubTitle>Location</SubTitle>

                <FormInput placeholderText={"Location"} />

                <SubTitle>Date & Time</SubTitle>

                <FormInput placeholderText={"Date"} />
                <View style={styles.dateTimeContainer}>
                  <View style={{ flex: 1 }}>
                    <FormInput
                      placeholderText={"From"}
                      largeStyle={{ marginLeft: 25 }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <FormInput
                      placeholderText={"To"}
                      largeStyle={{ marginRight: 25 }}
                    />
                  </View>
                </View>

                <SubTitle>Description</SubTitle>
                <FormInput
                  placeholderText={"Description"}
                  multiline
                  editable
                  numberOfLines={4}
                  maxLength={80}
                  largeStyle={{ textAlignVertical: "top" }}
                />

                <SubTitle>Invite Poppers</SubTitle>

                <View style={styles.inviteContainer}>
                  <PoppersDropdown />
                </View>

                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </GestureRecognizer>

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
    backgroundColor: "gray",
    top: 200,
  },
  modalView: {
    flex: 1,
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
  dateTimeContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  inviteContainer: {
    justifyContent: "center",
  },
});
