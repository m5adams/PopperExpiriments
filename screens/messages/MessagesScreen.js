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
import GlobalStyles from "../../constants/GlobalStyles";

const MessagesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <KeyBoardComponent>
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
          <View style={{ backgroundColor: Colors.primary500 }}>
            <Title>Messages</Title>
          </View>
          <View style={styles.searchBarContainer}>
            <SearchBar />
          </View>
          <View style={{ alignItems: "center" }}></View>
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
