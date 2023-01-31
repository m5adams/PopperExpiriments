import { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Pressable,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import SimpleModal from "../../components/ui/SimpleModal";
import { Ionicons } from "@expo/vector-icons";

import FeedCard from "../../components/ui/FeedCard";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";
import { SmallBubbleButton } from "../../components/ui/SmallBubbleButton";

const Home = ({ navigation }) => {
  const [isModalVisible, setisModalVisible] = useState(false);

  function toggleModal() {
    setisModalVisible(!isModalVisible);
  }

  function closeModal() {
    setisModalVisible(false);
  }

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

        <SmallBubbleButton onPress={toggleModal} isModalVisible={isModalVisible} />
      <SimpleModal visible={isModalVisible} closeModal={toggleModal} />
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

});
