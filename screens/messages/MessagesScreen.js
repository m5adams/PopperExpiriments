import { StyleSheet, SafeAreaView } from "react-native";

import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";

const MessagesScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <Title>Messages</Title>
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});