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
import Animated, {
  Easing,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import Colors from "../../constants/colors";
import GlobalStyles from "../../constants/GlobalStyles";
import BottomSheet from "../../components/ui/BottomSheet";
import TopTabNavigatorUser from "../../navigation/TopTabUserProfile";
import AdditionalOptionsSheet from "./AdditionalOptionsSheet";
import FeedCard from "../../components/ui/FeedCard";

const UserProfileScreen = () => {
  const { height } = useWindowDimensions();
  const ref = useRef();
  const onPress = useCallback(() => {
    ref.current.expand();
  }, []);

  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);

  const userNameStyle = useAnimatedStyle(() => {
    // const marginLeft = interpolate(
    //   translateX.value,
    //   [-100, 0],
    //   [0, -20],
    //   Extrapolate.EXTEND
    // );

    return {
      // marginLeft,
      transform: [
        {
          translateX: withTiming(translateX.value, {
            duration: 750,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  const bubbleStyle = useAnimatedStyle(() => {
    // const height = interpolate(
    //   translateY.value,
    //   [-100, 0],
    //   [0, 65],
    //   Extrapolate.EXTEND
    // );

    // const width = interpolate(
    //   translateY.value,
    //   [-100, 0],
    //   [0, 50],
    //   Extrapolate.EXTEND
    // );

    return {
      // height,
      // width,
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 750,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 0;
        translateX.value = 0;
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = -200;
        translateX.value = -200;
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });

  const friendsListButtonHandler = () => {
    console.log("friendslist will pop up here");
  };
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.userNameContainer}>
          <Animated.View style={[bubbleStyle, styles.imageContainer]}>
            <Image
              style={styles.image}
              source={require("../../assets/images/bubble.png")}
            />
          </Animated.View>
          <Text style={[styles.userName, userNameStyle]}>miraiadams</Text>

          <View style={styles.friendsIconContainer}>
            <Pressable
              style={({ pressed }) => (pressed ? styles.pressed : [])}
              onPress={friendsListButtonHandler}
            >
              <Ionicons
                style={styles.icon}
                name="people-outline"
                color={Colors.accent500}
                size={34}
              />
            </Pressable>
          </View>
          <View style={styles.settingsIconContainer}>
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
      </View>
      <Animated.ScrollView
        // stickyHeaderHiddenOnScroll={true}
        stickyHeaderIndices={[1]}
        onScroll={scrollHandler}
      >
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
        </View>

        <TopTabNavigatorUser />
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
      </Animated.ScrollView>

      <BottomSheet
        ref={ref}
        activeHeight={height * 0.4}
        backgroundColor={"white"}
        backDropColor={"black"}
        style={{ zIndex: 10 }}
      >
        <View>
          <AdditionalOptionsSheet />
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
    backgroundColor: "black",
  },
  imageContainer: {
    backgroundColor: "white",
    // marginRight: 20,
    // height: 50,
    // width: 45,
  },
  image: {
    height: 65,
    width: 50,
    // marginHorizontal: 20,
  },
  userName: {
    fontSize: 26,
    color: "white",
    fontWeight: "300",
    marginTop: 15,
    marginLeft: 10,
  },
  friendsIconContainer: {
    position: "absolute",
    right: 60,
  },
  settingsIconContainer: {
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
