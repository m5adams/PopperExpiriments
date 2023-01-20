import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";

import FormInput from "../../components/ui/FormInput";
import UploadImage from "../../components/functionality/UploadImage";
import KeyBoardComponent from "../../components/functionality/KeyboardComponent";
import BubbleButton from "../../components/ui/BubbleButton";
import GlobalStyles from "../../constants/GlobalStyles";

const FinishProfileScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [bio, setBio] = useState();
  const [drink, setDrink] = useState();

  function finishButtonHandler() {
    navigation.navigate("HomeScreen");
  }

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <KeyBoardComponent>
        <ScrollView style={styles.screen}>
          <KeyboardAvoidingView
            style={styles.screen}
            behavior="position"
            keyboardVerticalOffset={-100}
          >
            <View>
              <Image
                style={styles.bubbleImage}
                source={require("../../assets/images/bubble.png")}
              />
            </View>

            <View style={styles.imageContainer}>
              <UploadImage />
            </View>

            <FormInput
              returnKeyType="next"
              placeholderText="Name"
              labelValue={name}
              onChangeText={(text) => setName(text)}
              autoCorrect={false}
            />
            <FormInput
              returnKeyType="next"
              placeholderText="Username"
              labelValue={userName}
              onChangeText={(text) => setUserName(text)}
              autoCorrect={false}
            />
            <FormInput
              returnKeyType="next"
              placeholderText="Email"
              labelValue={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <FormInput
              returnKeyType="next"
              placeholderText="Phone"
              labelValue={phone}
              onChangeText={(text) => setPhone(text)}
              keyboardType="phone-pad"
            />
            <FormInput
              returnKeyType="next"
              placeholderText="Bio"
              labelValue={bio}
              onChangeText={(text) => setBio(text)}
            />
            <FormInput
              returnKeyType="next"
              placeholderText="Drink of Choice"
              labelValue={drink}
              onChangeText={(text) => setDrink(text)}
            />

            <View style={styles.createAccountButtonContainer}>
              <BubbleButton onPress={finishButtonHandler}>Finish</BubbleButton>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </KeyBoardComponent>
    </SafeAreaView>
  );
};

export default FinishProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bubbleImage: {
    height: 85,
    width: 70,
    marginHorizontal: 20,
  },
  imageContainer: {
    alignItems: "center",
  },
  createAccountButtonContainer: {
    alignItems: "center",
    borderRadius: 100,
    marginTop: 16,
  },
});
