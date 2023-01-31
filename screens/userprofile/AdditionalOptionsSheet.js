import React, { useContext } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AdditionalOptionsSheet = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.pressable, styles.pressed] : [styles.pressable]
          }
        >
          <Ionicons
            style={styles.icon}
            name="ios-create-outline"
            color={"black"}
            size={24}
          />
          <Text style={styles.optionText}>Edit Profile</Text>
        </Pressable>
      </View>
      <View style={styles.optionContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.pressable, styles.pressed] : [styles.pressable]
          }
        >
          <Ionicons
            style={styles.icon}
            name="settings-outline"
            color={"black"}
            size={24}
          />
          <Text style={styles.optionText}>Settings</Text>
        </Pressable>
      </View>
      <View style={styles.optionContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.pressable, styles.pressed] : [styles.pressable]
          }
        >
          <Ionicons
            style={styles.icon}
            name="information-circle-outline"
            color={"black"}
            size={24}
          />
          <Text style={styles.optionText}>About Popper</Text>
        </Pressable>
      </View>
      <View style={styles.optionContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.pressable, styles.pressed] : [styles.pressable]
          }
        >
          <Ionicons
            style={styles.icon}
            name="log-out-outline"
            color={"black"}
            size={24}
          />
          <Text style={styles.optionText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AdditionalOptionsSheet;

const styles = StyleSheet.create({
  container: {},
  optionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    // borderTopWidth: 1,
    // borderBottomColor: "black",
  },
  pressable: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 20,
  },
  optionText: {
    color: "black",
    fontSize: 14,
    paddingTop: 3,
  },
  pressed: {
    opacity: 0.5,
  },
});