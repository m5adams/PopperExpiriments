import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      {error && <Text>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Log In" /*onPress={handleLogin}*/ />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    padding: 8,
  },
});

export default LoginScreen;