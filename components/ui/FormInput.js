import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import Colors from "../../constants/colors";

const FormInput = ({
  labelValue,
  placeholderText,
  iconType,
  largeStyle,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, largeStyle]}
        returnKeyType="next"
        placeholder={placeholderText}
        value={labelValue}
        placeholderTextColor={"gray"}
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  input: {
    width: "85%",
    borderColor: Colors.accent500,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});
