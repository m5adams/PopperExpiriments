import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Pressable,
} from "react-native";

import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import OnboardingButton from "./OnboardingButton";
import { slides } from "../../data/slides";
import Colors from "../../constants/colors";

const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate("LoginScreen");
    }
  };

  const onPressHandler = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.onboardingItem}>
        <View style={{ flex: 12 }}>
          <FlatList
            data={slides}
            renderItem={({ item }) => <OnboardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Paginator data={slides} scrollX={scrollX} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <OnboardingButton
          scrollTo={scrollTo}
          buttonName={currentIndex == "2" ? "Get Started" : "Continue"}
          otherStyles={{ backgroundColor: Colors.primary400 }}
        />
        {currentIndex == "0" || currentIndex == "1" ? (
          <OnboardingButton buttonName={"Skip"} scrollTo={onPressHandler} />
        ) : (
          []
        )}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onboardingItem: {
    flex: 4,
    alignItems: "center",
    backgroundColor: Colors.accent500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
