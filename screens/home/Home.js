import { useCallback, useRef } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Pressable,
  Image,
  Text,
  useWindowDimensions,
} from "react-native";

import FeedCard from "../../components/ui/FeedCard";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";
import CreateEvent from "./CreateEvent";
import BottomSheet from "../../components/ui/BottomSheet";

const Home = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const ref = useRef();
  const onPress = useCallback(() => {
    ref.current.expand();
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <ScrollView>
        <Title>Timeline</Title>
        <View style={{ alignItems: "center" }}>
          <FeedCard />
          <FeedCard />
        </View>
      </ScrollView>

      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : [])}
        onPress={() => onPress()}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/bubble.png")}
        />
        <Text style={styles.text}>+</Text>
      </Pressable>
      <BottomSheet
        ref={ref}
        activeHeight={height * 0.8}
        backgroundColor={"#DAD3C8"}
        backDropColor={"black"}
      >
        <View style={{ alignItems: "center" }}>
          <CreateEvent />
        </View>
      </BottomSheet>
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
