import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const modalHeight = 150;
const SimpleModal = () => {
  return (
    <Pressable disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.textView}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}>Descripton</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modal: {
    height: modalHeight,
    width: width - 80,
    paddingTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  textView: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 2,
  },
  description: {
    fontSize: 14
  }
});

export { SimpleModal };
