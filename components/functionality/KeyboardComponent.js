import React from 'react';
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const KeyBoardComponent = ({ children }) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
  >
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default KeyBoardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});