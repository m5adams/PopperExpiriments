import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import Colors from "../../constants/colors";

const OnboardingButton = ({ scrollTo, buttonName, otherStyles }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={scrollTo}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, otherStyles, styles.pressed]
            : [styles.buttonInnerContainer, otherStyles]
        }
      >
        <View style={styles.button}>
          <Text style={styles.text}>{buttonName}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default OnboardingButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    alignItems: "center",
  },
  buttonInnerContainer: {
    width: "70%",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    alignItems: "center",
  },
  text: {
    color: Colors.accent500,
    fontSize: 20,
  },
  pressed: {
    opacity: 0.8,
  },
});
