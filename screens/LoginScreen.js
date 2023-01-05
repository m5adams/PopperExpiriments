import React, { useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Pressable, Image } from 'react-native';

import Divider from '../components/ui/Divider';
import Colors from '../constants/colors';
import BubbleButton from '../components/ui/BubbleButton';
//import firebase from 'react-native-firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passWord = useRef();
  const [error, setError] = useState(null);

  /*const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Navigate to main screen or display success message
      })
      .catch(error => {
        setError(error.message);
      });
  };*/

  return (
    <ScrollView >
      {error && <Text>{error}</Text>}

      {/* Popper Logo and Motto Text */}

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/popper.png')}/>
      </View>
      
      {/* Login Text Inputs and Buttons */}
      
      <View style={{marginTop: 20}}>
        <Text style={styles.loginText}>
            Login with your Popper Account:
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => {
              passWord.current.focus();
            }}
            blurOnSubmit={false}
            placeholder="Username or Email Address"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            ref={passWord}
            placeholder="Password"
            placeholderTextColor={'gray'}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.signInButtonContainer}>
          <BubbleButton>Sign In</BubbleButton>
        </View>
        
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Pressable
          style={({pressed}) =>
            pressed
            ? styles.pressed
            : []}
        >
          <Text style={{color: Colors.accent500, textDecorationLine: 'underline'}}>
            Forgot Password?
          </Text>
        </Pressable>
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
      </View>

      {/* Horizontal Divider */}

      <View style={{marginTop: 30}}>
        <Divider>OR</Divider>
      </View>

      {/* Other Sign-In Options */}

      <View>
        <Text style={styles.signInWith}>Sign in with: </Text>
        <View style={styles.continueWithContainer}>
          <Pressable style={({pressed}) =>
            pressed
            ? [styles.continueWithButtonInnerContainer, {backgroundColor: '#1778f2'}, styles.pressed]
            : [styles.continueWithButtonInnerContainer, {backgroundColor: '#1778f2'}]}
          >
            <Image style={styles.icon} source={require('../assets/icons/facebook-icon.png')}/>
          </Pressable>
          <Pressable style={({pressed}) =>
            pressed
            ? [styles.googleIconContainer, {backgroundColor: 'white'}, styles.pressed]
            : [styles.googleIconContainer, {backgroundColor: 'white'}]}
          >
            <Image style={styles.googleIcon} source={require('../assets/icons/google-icon.png')}/>
          </Pressable>
          <Pressable style={({pressed}) =>
            pressed
            ? [styles.continueWithButtonInnerContainer, {backgroundColor: 'black'}, styles.pressed]
            : [styles.continueWithButtonInnerContainer, {backgroundColor: 'black'}]}
          >
            <Image style={styles.icon} source={require('../assets/icons/apple-icon.png')}/>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
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
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center'
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
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  signInButtonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 70,
    paddingRight: 20,
    borderRadius: 100,
  },
  pressed: {
    opacity: 0.75
  },
  continueWithContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  continueWithButtonInnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 100,
    marginHorizontal: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  googleIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 100,
    marginHorizontal: 10,
    backgroundColor: 'white'
  },
  googleIcon: {
    width: 40,
    height: 40,
    borderRadius: 100
  },
  signInWith: {
    marginTop: 25,
    textAlign: 'center',
    color: 'white',
    fontSize: 14
  },
  logInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row'
  },
});