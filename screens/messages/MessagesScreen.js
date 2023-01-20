import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
} from "react-native";

import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import SearchBar from "../../components/ui/SearchBar";
import KeyBoardComponent from "../../components/functionality/KeyboardComponent";
import FeedCard from "../../components/ui/FeedCard";
import GlobalStyles from "../../constants/GlobalStyles";

const MessagesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <KeyBoardComponent>
        <ScrollView style={styles.container}>
          <Title>Messages</Title>
          <View style={styles.searchBarContainer}>
            <SearchBar />
          </View>

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
      </KeyBoardComponent>
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  searchBarContainer: {
    alignItems: "center",
  },
});
