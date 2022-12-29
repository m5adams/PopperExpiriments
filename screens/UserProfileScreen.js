import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const UserProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  const handleSave = () => {
    if (!name || !email || !phone || !age) {
      setError('Please enter your name, email, phone, and age.');
    } else {
      // Validate input and update profile information in your database or a third-party service
      // Display success message or navigate to another screen
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.profile}>My Profile</Text>
      {error && <Text>{error}</Text>}
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
      <Button title="Save" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    marginTop: 100
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

export default UserProfileScreen;