import { StyleSheet, View, Text } from "react-native";

import BubbleButton from "../../components/ui/BubbleButton";

const PopScreen = ({navigation}) => {

  function pressHandler() {
    // navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Pop Screen</Text>

      <View style={styles.button}>
        <BubbleButton onPress={pressHandler}>POP!</BubbleButton>
      </View>
    </View>
  );
};

export default PopScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    marginHorizontal: 20,
    marginTop: -40,
    width: 250,
    height: 250,
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