import { StyleSheet, View, Text, SafeAreaView } from "react-native";

import BubbleButton from "../../components/ui/BubbleButton";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";

const Home = ({navigation}) => {

  function pressHandler() {
    console.log('in home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Timeline</Title>
      <View style={styles.screen}>
        <Text style={styles.text}>Home Screen will go here</Text>

        <View style={styles.button}>
          <BubbleButton onPress={pressHandler}>We made it yerrrrr</BubbleButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
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