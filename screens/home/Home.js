import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
} from "react-native";

import FeedCard from "../../components/ui/FeedCard";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";
import SimpleModal from "../../components/ui/SimpleModal";

import { SmallBubbleButton } from "../../components/ui/SmallBubbleButton";

import { HOMEFEED } from "../../data/dummy-data";

const Home = ({ navigation }) => {
  const [isModalVisible, setisModalVisible] = useState(false);

  function toggleModal() {
    setisModalVisible(!isModalVisible);
  }

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View style={{ backgroundColor: Colors.primary500 }}>
        <Title>Timeline</Title>
      </View>

      <FlatList
        data={HOMEFEED}
        renderItem={({ item }) => <FeedCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ alignItems: "center" }}
      />

      <SmallBubbleButton
        onPress={toggleModal}
        isModalVisible={isModalVisible}
      />
      <SimpleModal
        visible={isModalVisible}
        closeModal={toggleModal}
        style={styles.modal}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  text: {
    position: "absolute",
    alignItems: "flex-end",
    color: "white",
    fontSize: 30,
    
    right: 33.5,
    bottom: 33,
    fontFamily: "Quicksand_600Semibold"
  },
  modal: {
    flex: 1,
    textAlignVertical: "center",
  }
});
