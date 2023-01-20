import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  Pressable,
} from "react-native";

import BubbleButton from "../../components/ui/BubbleButton";
import FeedCard from "../../components/ui/FeedCard";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";

const Home = ({ navigation }) => {
  function pressHandler() {
    console.log("in home");
  }

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <ScrollView style={styles.screen}>
        <Title>Timeline</Title>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </ScrollView>
      <Pressable
        style={({ pressed }) =>
          pressed ? styles.pressed : [styles.buttonContainer]
        }
        onPress={pressHandler}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/bubble.png")}
        />
        <Text style={styles.text}>+</Text>
      </Pressable>
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
    //alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginVertical: 10,
    marginRight: 10,
  },
  image: {
    height: 85,
    width: 70,
  },
  text: {
    position: "absolute",
    alignItems: "flex-end",
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    right: 25,
    bottom: 25,
  },
  pressed: {
    opacity: 0.5,
  },
});
