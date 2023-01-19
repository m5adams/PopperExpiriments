import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import FormButton from '../../components/ui/FormButton';
import UploadImage from '../../components/functionality/UploadImage';
import KeyBoardComponent from '../../components/functionality/KeyboardComponent';

const FinishProfileScreen = () => {
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  return (
    <SafeAreaView style={styles.screen}>
      <KeyBoardComponent>
        <ScrollView style={styles.screen}>
          <KeyboardAvoidingView style={styles.screen} behavior="position" keyboardVerticalOffset={-100}>
            <View>
              <Image style={styles.bubbleImage} source={require('../../assets/images/bubble.png')}/>
            </View>

            <View style={styles.imageContainer}>
              <UploadImage />
            </View>

            <FormButton 
              returnKeyType="next"
              placeholderText="Name"
              labelValue={name}
              onChangeText={(text) => setName(text)}
              autoCorrect={false}
            />
            <FormButton 
              returnKeyType="next"
              placeholderText="Username"
              labelValue={userName}
              onChangeText={(text) => setUserName(text)}
              autoCorrect={false}
            />
            <FormButton 
              returnKeyType="next"
              placeholderText="Email"
              labelValue={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <FormButton 
              returnKeyType="next"
              placeholderText="Phone"
              labelValue={phone}
              onChangeText={(text) => setPhone(text)}
              keyboardType="phone-pad"
            />
            <FormButton 
              returnKeyType="next"
              placeholderText="Bio"
              labelValue={phone}
              onChangeText={(text) => setPhone(text)}
            />
            <FormButton 
              returnKeyType="next"
              placeholderText="Drink of Choice"
              labelValue={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </KeyBoardComponent>
    </SafeAreaView>
  );
};

export default FinishProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  bubbleImage: {
    height: 85,
    width: 70,
    marginHorizontal: 20
  },
  imageContainer: {
    alignItems: 'center'
  },
});