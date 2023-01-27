import React, { useCallback, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";
import BottomSheet from "../../components/ui/BottomSheet";
import TopTabNavigatorUser from "../../navigation/TopTabUserProfile";

const UserProfileScreen = () => {
  const { height } = useWindowDimensions();
  const ref = useRef();
  const onPress = useCallback(() => {
    ref.current.expand();
  }, []);
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      {/* <ScrollView stickyHeaderIndices={[0, 2]}>
        <View style={styles.headerContainer}> */}
      <View style={styles.userNameContainer}>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/bubble.png")}
          />
        </View>
        <Text style={styles.userName}>miraiadams</Text>

        <View style={styles.iconContainer}>
          <Pressable
            style={({ pressed }) => (pressed ? styles.pressed : [])}
            onPress={() => onPress()}
          >
            <Ionicons
              style={styles.icon}
              name="menu"
              color={Colors.accent500}
              size={34}
            />
          </Pressable>
        </View>
      </View>
      {/* </View> */}

      <View style={styles.profileContentContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Image
              style={styles.profilePic}
              source={require("../../assets/images/mirai.png")}
            />
          </View>

          <View style={{ flex: 2, alignItems: "center" }}>
            <Text style={styles.name}>Mirai Adams</Text>

            <Text style={styles.bio}>UCSD 22'</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}
        >
          Friends List
        </Text>
      </View>

      <TopTabNavigatorUser />
      {/* </ScrollView> */}
      <BottomSheet
        ref={ref}
        activeHeight={height * 0.5}
        backgroundColor={"white"}
        backDropColor={"black"}
      >
        <View>
          <Text>Settings</Text>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.primary500,
  },
  userNameContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  image: {
    height: 85,
    width: 70,
    marginHorizontal: 20,
  },
  userName: {
    fontSize: 26,
    color: "white",
    fontWeight: "300",
    marginTop: 20,
  },
  iconContainer: {
    position: "absolute",
    right: 20,
  },
  icon: {
    marginTop: 20,
  },
  profileContentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    height: 125,
    width: 125,
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 200,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  bio: {
    fontSize: 18,
    fontWeight: "300",
    color: "white",
    marginBottom: 20,
  },
  pressed: {
    opacity: 0.5,
  },
});
