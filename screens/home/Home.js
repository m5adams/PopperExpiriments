import { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Pressable,
  Image,
  Text,
  Modal,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleModal } from "../../components/ui/SimpleModal";

import FeedCard from "../../components/ui/FeedCard";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";
import CreateEvent from "./CreateEvent";
import BottomSheet from "../../components/ui/BottomSheet";
import BottomSheet2 from "../../components/ui/BottomSheet2";

const Home = ({ navigation }) => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };

  const MyButton = ({
    label,
    containerStyle = {},
    textStyle = {},
    onPress,
  }) => (
    <Pressable
      style={({ pressed }) => [styles.button]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </Pressable>
  );

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
      </ScrollView>

      <Pressable onPress={() => onPress()} style={styles.button}>
        <Image
          style={styles.image}
          source={require("../../assets/images/bubble.png")}
        />
        <Ionicons name="md-add" style={styles.icon} size={30} color="white" />
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
  image: {
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
  icon: {
    position: 'absolute',
    justiftyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    right: 10,
  },
});
