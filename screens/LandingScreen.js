import { StyleSheet, View, Text, Image } from "react-native";

import BubbleButton from "../components/ui/BubbleButton";

const LandingScreen = ({navigation}) => {

  function pressHandler() {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/popper.png')}/>
      </View>

      <Text style={styles.text}>Welcome to Popper!</Text>

      <View style={styles.button}>
        <BubbleButton onPress={pressHandler}>POP!</BubbleButton>
      </View>
    </View>
  );
};

export default LandingScreen;

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
  signInButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 100,
  },
});