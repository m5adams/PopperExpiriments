import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Title = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/bubble.png")}
        />
      </View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    color: "white",
    marginVertical: 12,
    fontFamily: "QuicksandSemiBold"
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    position: "absolute",
    height: 63,
    width: 52,
  },
});
