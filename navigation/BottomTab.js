import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import Home from "../screens/home/Home";
import TopTabNavigatorNotifs from "./TopTabNotifications";
import MessagesScreen from "../screens/messages/MessagesScreen";
import TopTabNavigatorUser from "./TopTabUserProfile";
import PopStackNavigator from "./PopStack";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerShown: false,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveTintColor: "white",
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={28} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TopTabNavigatorNotifs}
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={28} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Pop"
        component={PopStackNavigator}
        options={{
          title: "Pop",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: "#7d9ac3",
                width: 70,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                borderWidth: 2,
                borderColor: Colors.accent500,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                POP!
              </Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox" color={color} size={28} />
          ),
        }}
      />
      <BottomTab.Screen
        name="UserProfile"
        component={TopTabNavigatorUser}
        options={{
          title: "My Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={28} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
