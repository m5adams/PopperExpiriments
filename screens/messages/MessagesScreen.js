import { StyleSheet, SafeAreaView, TextInput, View } from "react-native";

import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import SearchBar from "../../components/ui/SearchBar";
import KeyBoardComponent from '../../components/functionality/KeyboardComponent';
import FeedCard from "../../components/ui/FeedCard";

const MessagesScreen = ({navigation}) => {

  return (
    <KeyBoardComponent>
      <SafeAreaView style={styles.container}>
        <Title>Messages</Title>
        
        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>

        <FeedCard />
      
      </SafeAreaView>
    </KeyBoardComponent>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  searchBarContainer: {
    alignItems: 'center'
  },
});