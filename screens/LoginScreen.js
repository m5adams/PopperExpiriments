import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Pressable, Image } from 'react-native';

import Divider from '../components/ui/Divider';
import Colors from '../constants/colors';
import BubbleButton from '../components/ui/BubbleButton';
//import firebase from 'react-native-firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <View>
      {error && <Text>{error}</Text>}

      {/* Popper Logo and Motto Text */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/popper.png')}/>
      </View>
      <View style={styles.mottoContainer}>
        <Text style={styles.mottoTextFirst}>Pop Social Bubbles. Get Rewarded. Meet Again. </Text>
        <Text style={styles.mottoTextSecond}>Elevate your social excursions.</Text>
      </View>
      
      {/* Login Text Inputs and Buttons */}
      <Text style={styles.loginText}>
          Login with your Popper Account:
      </Text>
      
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username or Email Address"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
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

      <View style={styles.otherOptionsTextContainer}>
        <Text style={styles.otherOptionsText}>
          Forgot <Pressable><Text style={{color: Colors.accent500, textDecorationLine: 'underline'}}>Username</Text></Pressable> or 
          <Pressable><Text style={{color: Colors.accent500, textDecorationLine: 'underline'}}> Password</Text></Pressable>.
        </Text>
        <Text style={{color: 'white'}}>
          Dont have an Account? <Pressable><Text style={{color: Colors.accent500, textDecorationLine: 'underline'}}>Sign Up</Text></Pressable>!
        </Text>
      </View>

      {/* Horizontal Divider */}
      <Divider>OR</Divider>

      {/* Other Sign-In Options */}

      <View style={styles.continueWithContainer}>
        <View style={styles.continueWithButtonOuterContainer}>
          <Pressable style={({pressed}) =>
            pressed
            ? [styles.continueWithButtonInnerContainer, {backgroundColor: '#1778f2'}, styles.pressed]
            : [styles.continueWithButtonInnerContainer, {backgroundColor: '#1778f2'}]}
          >
            <Text style={{color: 'white'}}>
              Continue with Facebook
            </Text>
          </Pressable>
        </View>
        <View style={styles.continueWithButtonOuterContainer}>
          <Pressable style={({pressed}) =>
            pressed
            ? [styles.continueWithButtonInnerContainer, {backgroundColor: 'white'}, styles.pressed]
            : [styles.continueWithButtonInnerContainer, {backgroundColor: 'white'}]}
          >
            <Text style={{color: 'gray'}}>
              Continue with Google
            </Text>
          </Pressable>
        </View>
        <View style={styles.continueWithButtonOuterContainer}>
          <Pressable style={({pressed}) =>
            pressed
            ? [styles.continueWithButtonInnerContainer, {backgroundColor: 'black'}, styles.pressed]
            : [styles.continueWithButtonInnerContainer, {backgroundColor: 'black'}]}
          >
            <Text style={{color: 'white'}}>
              Continue with Apple ID
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    marginHorizontal: 20,
    marginTop: 20,
    width: 200,
    height: 200,
  },
  mottoContainer: {
    alignItems: 'center'
  },
  mottoTextFirst: {
    color: 'white',
    fontSize: 10,
    margin: 2
  },
  mottoTextSecond: {
    color: 'white',
    fontSize: 10,
    marginBottom: 2,
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
  otherOptionsTextContainer: {
    alignItems: 'center'
  },
  otherOptionsText: {
    color: 'white',
  },
  signInButtonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 38,
    paddingRight: 20,
    borderRadius: 100,
  },
  pressed: {
    opacity: 0.75
  },
  continueWithContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueWithButtonOuterContainer: {
    width: '85%'
  },
  continueWithButtonInnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 50,
    marginVertical: 12
  },
});