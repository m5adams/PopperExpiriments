import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/login/LoginScreen';
import CreateAccount from '../screens/login/CreateAccount';
import FinishProfileScreen from '../screens/login/FinishProfileScreen';
import ForgotPassword from '../screens/login/ForgotPassword';
import BottomTabNavigator from './BottomTab';
import Colors from '../constants/colors';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.primary500}
      }}
    >
      <Stack.Screen 
        name='LandingScreen' 
        component={LandingScreen}
        options={{
          gestureEnabled: false
        }}
      />
      <Stack.Screen 
        name='LoginScreen' 
        component={LoginScreen}
        options={{
          gestureEnabled: false
        }}
      />
      <Stack.Screen 
        name='CreateAccount' 
        component={CreateAccount}
        options={{
          gestureEnabled: false
        }}
      />
      <Stack.Screen 
        name='FinishProfile' 
        component={FinishProfileScreen}
        options={{
          gestureEnabled: false
        }}
      />
      <Stack.Screen 
        name='ForgotPassword' 
        component={ForgotPassword}
        options={{
          presentation: 'modal'
        }}
      />
      <Stack.Screen 
        name='HomeScreen' 
        component={BottomTabNavigator}
        options={{
          gestureEnabled: false
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;