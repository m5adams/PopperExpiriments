import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PopScreen from "../screens/pop/PopScreen";
import BluetoothScreen from "../screens/pop/BluetoothScreen";
import Colors from "../constants/colors";

const Stack = createNativeStackNavigator();

function PopStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.primary500 },
      }}
    >
      <Stack.Screen
        name="PopScreen"
        component={PopScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="BluetoothScreen"
        component={BluetoothScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default PopStackNavigator;
