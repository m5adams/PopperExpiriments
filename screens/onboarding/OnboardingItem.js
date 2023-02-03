import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

import Colors from "../../constants/colors";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // flex: 0.7,
    height: 350,
    width: 350,
    marginTop: 100,
    justifyContent: "center",
  },
  textContainer: {
    marginTop: 80,
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    textAlign: "center",
    color: Colors.primary500,
  },
  description: {
    fontWeight: "300",
    paddingHorizontal: 64,
    textAlign: "center",
    color: Colors.primary500,
  },
});
