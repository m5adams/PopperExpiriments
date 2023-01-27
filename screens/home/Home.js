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
import BottomSheet2 from "../../components/ui/BottomSheet2";

const Home = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const ref = useRef();
  const onPress = useCallback(() => {
    ref.current.expand();
  }, []);

  const ref2 = useRef();

  const onPress2 = useCallback(() => {
    const isActive = ref2.current.isActive();
    if (isActive) {
      ref2.current.scrollTo(0);
    } else {
      ref2.current.scrollTo(-200);
    }
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={{ backgroundColor: Colors.primary500 }}>
          <Title>Timeline</Title>
        </View>
        <View style={{ alignItems: "center" }}>
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
        </View>

        <Pressable onPress={onPress2}>
          <View
            style={{
              alignItems: "center",
              margin: 30,
              backgroundColor: "white",
            }}
          >
            <Text style={{ fontSize: 20 }}>button</Text>
          </View>
        </Pressable>
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
        backgroundColor={"gray"}
        backDropColor={"black"}
      >
        <View style={{ alignItems: "center" }}>
          <CreateEvent />
        </View>
      </BottomSheet>
      <BottomSheet2 ref={ref2}>
        <View>
          <Text>We made it</Text>
        </View>
      </BottomSheet2>
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
