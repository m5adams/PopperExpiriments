import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/login/LoginScreen';
import CreateAccount from '../screens/login/CreateAccount';
import ForgotPassword from '../screens/login/ForgotPassword';
import Home from '../screens/home/Home';
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
      />
      <Stack.Screen 
        name='LoginScreen' 
        component={LoginScreen}
      />
      <Stack.Screen 
        name='CreateAccount' 
        component={CreateAccount}
      />
      <Stack.Screen 
        name='ForgotPassword' 
        component={ForgotPassword}
        options={{
          presentation: 'modal'
        }}
      />
      <Stack.Screen 
        name='Home' 
        component={Home}
        options={{
          title: 'Home'
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;