import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";
import Title from "../../components/ui/Title";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <Title>Settings</Title>
      <View>
        <Text>Settings</Text>
      </View>
      <View>
        <Text>Settings</Text>
      </View>
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
  },
});
