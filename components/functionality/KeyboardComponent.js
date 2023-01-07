import React from 'react';
import { Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const KeyBoardComponent = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default KeyBoardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});