import { StyleSheet, View, Text } from "react-native";

import BubbleButton from "../../components/ui/BubbleButton";
import Colors from "../../constants/colors";

const MessagesScreen = ({navigation}) => {

  function pressHandler() {
    // navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Messages Screen</Text>

      <View style={styles.button}>
        <BubbleButton onPress={pressHandler}>msg</BubbleButton>
      </View>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary500,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 100,
  },
});