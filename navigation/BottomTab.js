import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/colors';
import Home from '../screens/home/Home';
import UserProfileScreen from '../screens/userprofile/UserProfileScreen';
import MessagesScreen from '../screens/messages/MessagesScreen';
import PopScreen from '../screens/pop/PopScreen';
import NotificationsScreen from '../screens/notifications/NotificationsScreen';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {backgroundColor: Colors.primary500},
        
      }}
    >
      <BottomTab.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Home'
        }}
      />
      <BottomTab.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={{
          title: 'Notifications'
        }}
      />
      <BottomTab.Screen 
        name="Pop" 
        component={PopScreen} 
        options={{
          title: 'Pop'
        }}
      />
      <BottomTab.Screen 
        name="Messages" 
        component={MessagesScreen} 
        options={{
          title: 'Messages'
        }}
      />
      <BottomTab.Screen 
        name="UserProfile" 
        component={UserProfileScreen} 
        options={{
          title: 'My Profile'
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;