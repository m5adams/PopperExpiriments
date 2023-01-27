import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import SubTitle from "../../components/ui/SubTitle";
import FormInput from "../../components/ui/FormInput";
import PoppersDropdown from "../../components/ui/PoppersDropdown";

const CreateEvent = () => {
  return (
    <View>
      <SubTitle>Title</SubTitle>
      <View>
        <FormInput placeholderText={"Title"} />
      </View>

      <SubTitle>Location</SubTitle>

      <FormInput placeholderText={"Location"} />

      <SubTitle>Date & Time</SubTitle>

      <FormInput placeholderText={"Date"} />
      <View style={styles.dateTimeContainer}>
        <View style={{ flex: 1 }}>
          <FormInput placeholderText={"From"} largeStyle={{ marginLeft: 25 }} />
        </View>
        <View style={{ flex: 1 }}>
          <FormInput placeholderText={"To"} largeStyle={{ marginRight: 25 }} />
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

      {/* <View style={styles.inviteContainer}>
        <PoppersDropdown />
      </View> */}
    </View>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
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
    // paddingLeft: 40,
    // justifyContent: "center",
  },
});
