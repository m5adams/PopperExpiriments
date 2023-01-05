import React, { useState, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, Pressable, Image } from 'react-native';

import Colors from '../constants/colors';
import BubbleButton from '../components/ui/BubbleButton';
//import firebase from 'react-native-firebase';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const userName = useRef();
  const [password, setPassword] = useState('');
  const passWord = useRef();
  const [repassword, setRepassword] = useState('');
  const repassWord = useRef();
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
    <ScrollView keyboardDismissMode='onDrag'>
      {error && <Text>{error}</Text>}

      {/* Popper Logo*/}

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/popper.png')}/>
      </View>
      
      {/* Login Text Inputs and Buttons */}
      
      <View style={{marginTop: 20}}>
        <Text style={styles.createText}>
            Create your Popper Account:
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => {
              userName.current.focus();
            }}
            blurOnSubmit={false}
            placeholder="Email Address"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            ref={userName}
            onSubmitEditing={() => {
              passWord.current.focus();
            }}
            blurOnSubmit={false}
            placeholder="Username"
            placeholderTextColor={'gray'}
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            ref={passWord}
            onSubmitEditing={() => {
              repassWord.current.focus();
            }}
            blurOnSubmit={false}
            placeholder="Password"
            placeholderTextColor={'gray'}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            ref={repassWord}
            placeholder="Confirm Password"
            placeholderTextColor={'gray'}
            value={repassword}
            onChangeText={text => setRepassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.createAccountButtonContainer}>
          <BubbleButton>Create Account</BubbleButton>
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
    </ScrollView>
  );
};

export default CreateAccount;

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
  createText: {
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
  logInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row'
  },
  createAccountButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 16
  },
  pressed: {
    opacity: 0.75
  },
  signInWith: {
    // marginTop: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 14
  },
});