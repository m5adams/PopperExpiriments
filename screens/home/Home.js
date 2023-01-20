import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  Pressable,
} from "react-native";

import FeedCard from "../../components/ui/FeedCard";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";
import CreateEvent from "./CreateEvent";

const Home = ({ navigation }) => {
  function pressHandler() {
    console.log("in home");
  }

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <ScrollView>
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
      <CreateEvent />
      {/* <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : [])}
        onPress={pressHandler}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/bubble.png")}
        />
        <Text style={styles.text}>+</Text>
      </Pressable> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  image: {
    position: "absolute",
    right: 10,
    bottom: 10,
    height: 80,
    width: 65,
  },
  text: {
    position: "absolute",
    alignItems: "flex-end",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    right: 33.5,
    bottom: 33,
  },
  pressed: {
    opacity: 0.8,
  },
});
