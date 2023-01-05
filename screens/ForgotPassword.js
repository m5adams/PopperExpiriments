import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';

import Colors from '../constants/colors';
import BubbleButton from '../components/ui/BubbleButton';
//import firebase from 'react-native-firebase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
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
    <View >
      {error && <Text>{error}</Text>}

      {/* Popper Logo and Motto Text */}

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/popper.png')}/>
      </View>
      
      {/* Login Text Inputs and Buttons */}
      
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

    </View>
  );
};

export default ForgotPassword;

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