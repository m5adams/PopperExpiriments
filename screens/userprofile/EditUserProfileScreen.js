import React, { useState } from 'react';
import { TextInput, Text, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import Colors from '../../constants/colors';

const EditUserProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.profile}>My Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={text => setAge(text)}
        />
        <Button title="Save"/>

        
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditUserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.primary500,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    padding: 8,
    color: 'white'
  },
  profile: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold'
  }
});

