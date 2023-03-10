import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  RefreshControl,
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
import { USERS } from "../../data/dummy-data";

const UserProfileScreen = ({ navigation }) => {
  const user = USERS[1];

  const { height } = useWindowDimensions();
  const ref = useRef();
  const onPress = useCallback(() => {
    ref.current.expand();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);

  const userNameStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(translateX.value, {
            duration: 850,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  const bubbleStyle = useAnimatedStyle(() => {
    const height = interpolate(
      translateY.value,
      [0, -200],
      [65, 0],
      Extrapolate.CLAMP
    );

    const width = interpolate(
      translateY.value,
      [0, -200],
      [50, 0],
      Extrapolate.CLAMP
    );

    return {
      height,
      width,
      transform: [
        {
          translateY: translateY.value,
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
        translateY.value = withTiming(0, {
          duration: 550,
          easing: Easing.inOut(Easing.ease),
        });
        translateX.value = 0;
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = withTiming(-200, {
          duration: 850,
          easing: Easing.inOut(Easing.ease),
        });
        translateX.value = -20;
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
    navigation.navigate("FriendsList", { friendsList: user.friendIds });
  };
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.userNameContainer}>
          <Animated.View style={[styles.imageContainer, bubbleStyle]}>
            <Image
              style={styles.image}
              source={require("../../assets/images/bubble.png")}
            />
          </Animated.View>
          <Animated.View style={userNameStyle}>
            <Text style={[styles.userName]}>{user.userName}</Text>
          </Animated.View>

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
        stickyHeaderIndices={[1]}
        onScroll={scrollHandler}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.profileContentContainer}>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Image style={styles.profilePic} source={user.profilePic} />
          </View>

          <View style={{ flex: 2, alignItems: "center" }}>
            <Text style={styles.name}>{user.fullName}</Text>

            <Text style={styles.bio}>{user.bio}</Text>
          </View>
        </View>

        <TopTabNavigatorUser />

        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
        <View style={{ height: 40 }}>
          <Text style={{ color: "white" }}>TEST CONTENT</Text>
        </View>
      </Animated.ScrollView>

      <BottomSheet
        ref={ref}
        activeHeight={height * 0.4}
        backgroundColor={"white"}
        backDropColor={"black"}
        style={{ zIndex: 10 }}
      >
        <View>
          <AdditionalOptionsSheet navigation={navigation} />
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
  },
  imageContainer: {
    marginLeft: 20,
    marginRight: 10,
  },
  image: {
    height: 65,
    width: 50,
  },
  userName: {
    fontSize: 24,
    color: "white",
    fontFamily: "QuicksandSemiBold",
    marginTop: 15,
    marginLeft: 10,
  },
  friendsIconContainer: {
    position: "absolute",
    top: -5,
    right: 60,
  },
  settingsIconContainer: {
    position: "absolute",
    top: -5,
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
    fontSize: 28,
    fontFamily: "QuicksandSemiBold",
    color: "white",
    marginTop: 20,
  },
  bio: {
    fontSize: 16,
    fontFamily: "QuicksandRegular",
    color: "white",
    marginBottom: 20,
  },
  pressed: {
    opacity: 0.5,
  },
});
