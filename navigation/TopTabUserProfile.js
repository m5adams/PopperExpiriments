import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Colors from "../constants/colors";
import UserFeedScreen from "../screens/userprofile/UserFeedScreen";
import UserMediaScreen from "../screens/userprofile/UserMediaScreen";

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigatorUser() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderColor: Colors.accent500,
          borderBottomWidth: 1,
          backgroundColor: Colors.primary500,
        },
        tabBarLabelStyle: {
          color: "white",
          fontFamily: "QuicksandSemiBold",
          fontSize: 14,
        },
      }}
    >
      <TopTab.Screen
        name="Feed"
        component={UserFeedScreen}
        options={{
          title: "Feed",
          tabBarIndicatorStyle: {
            position: "absolute",
            backgroundColor: Colors.accent500,
            height: 3,
            width: 46,
            borderRadius: 30,
            marginBottom: 10,
            left: 75,
          },
        }}
      />
      <TopTab.Screen
        name="Media"
        component={UserMediaScreen}
        options={{
          title: "Media",
          tabBarIndicatorStyle: {
            position: "absolute",
            backgroundColor: Colors.accent500,
            height: 3,
            width: 53,
            borderRadius: 30,
            marginBottom: 10,
            left: 71,
          },
        }}
      />
    </TopTab.Navigator>
  );
}

export default TopTabNavigatorUser;
