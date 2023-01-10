import { StyleSheet, View, Text } from "react-native";

import BubbleButton from "../../components/ui/BubbleButton";

const Home = ({navigation}) => {

  function pressHandler() {
    console.log('in home');
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Home Screen will go here</Text>

      <View style={styles.button}>
        <BubbleButton onPress={pressHandler}>We made it yerrrrr</BubbleButton>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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