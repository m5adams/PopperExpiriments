import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image, KeyboardAvoidingView } from 'react-native';

import Colors from '../constants/colors';
import BubbleButton from '../components/ui/BubbleButton';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="padding">

      {/* Popper Logo */}

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/popper.png')}/>
      </View>
      
      {/* Email Address Input and Button */}
      
      <View style={{marginTop: 20}}>
        <Text style={styles.loginText}>
            Please enter your Email Address:
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.signInButtonContainer}>
          <BubbleButton>Recover Account</BubbleButton>
        </View>
        
      </View>

      {/* Other Sign in Options */}

      <View style={styles.logInContainer}>
        <Text style={{color: 'white', fontSize: '14', marginRight: 5}}>
          Already have an Account?
        </Text>
        <Pressable 
          style={({pressed}) =>
            pressed
            ? [{color: Colors.accent500, textDecorationLine: 'underline'}, styles.pressed]
            : [{color: Colors.accent500, textDecorationLine: 'underline'}]}
        >
          <Text style={{color: Colors.accent500, textDecorationLine: 'underline'}}>
            Login!
          </Text>
        </Pressable>
      </View>
      <View style={styles.logInContainer}>
          <Text style={{color: 'white', fontSize: '14', marginRight: 5}}>
            Don't have an Account?
          </Text>
          <Pressable
            style={({pressed}) =>
              pressed
              ? [styles.pressed]
              : []}
          >
            <Text style={{color: Colors.accent500, textDecorationLine: 'underline'}}>
              Sign Up!
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    marginHorizontal: 20,
    marginTop: 40,
    width: 200,
    height: 200,
  },
  loginText: {
    width: '90%',
    paddingLeft: 40,
    marginTop: 16,
    color: 'white',
    alignContent: 'flex-end'
  },
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
  signInButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 100,
  },
  pressed: {
    opacity: 0.75
  },
  logInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row'
  },
});