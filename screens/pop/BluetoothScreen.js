import { StyleSheet, View, SafeAreaView, Pressable, Text } from "react-native";

// import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";

const BluetoothScreen = ({ navigation }) => {
  function pressHandler() {
    navigation.navigate("LoginScreen");
  }
  function pressHandler2() {
    navigation.navigate("PopScreen");
  }

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <Text style={styles.titleText}>Place Phones Nearby</Text>

      <View style={{ alignItems: "center", marginTop: 60, marginBottom: 40 }}>
        <View
          style={{
            height: 200,
            width: "60%",
            backgroundColor: Colors.primary400,
            borderRadius: 30,
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>Bluetooth Image Placeholder</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={pressHandler}>
          <Text style={styles.text}>Scan other Popper's QR Codes</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={pressHandler2}>
          <Text style={styles.text}>Connect with QR Code</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default BluetoothScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  titleText: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "400",
    color: "white",
    marginVertical: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: "70%",
    marginTop: 20,
    backgroundColor: Colors.primary400,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 16,
    elevation: 4,
  },
});
