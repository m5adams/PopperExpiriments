import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import Colors from '../../constants/colors';

const FormButton = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        returnKeyType="next"
        numberOfLines={1}
        placeholder={placeholderText}
        value={labelValue}
        placeholderTextColor={'gray'}
        {...rest}
      />
    </View>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 12,
  },
  input: {
    height: 50,
    width: '85%',
    borderColor: Colors.accent500,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 8,
    padding: 8,
    backgroundColor: 'white'
  },
});