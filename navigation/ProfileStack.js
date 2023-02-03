import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserProfileScreen from "../screens/userprofile/UserProfileScreen.js";
import AdditionalOptionsSheet from "../screens/userprofile/AdditionalOptionsSheet.js";
import FriendsList from "../screens/userprofile/FriendsList.js";
import Settings from "../screens/userprofile/Settings.js";
import EditProfile from "../screens/userprofile/EditProfile.js";

import Colors from "../constants/colors";

const Stack = createNativeStackNavigator();

function ProfileStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.primary500 },
      }}
    >
      <Stack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="AdditionalOptionsSheet"
        component={AdditionalOptionsSheet}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="FriendsList"
        component={FriendsList}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;
