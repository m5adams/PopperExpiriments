import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name='home' color={color} size={28}/>
          ),
        }}
      />
      <BottomTab.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={{
          title: 'Notifications',
          tabBarIcon: ({color}) => (
            <Ionicons name='notifications' color={color} size={28}/>
          ),
        }}
      />
      <BottomTab.Screen 
        name="Pop" 
        component={PopScreen} 
        options={{
          title: 'Pop',
          tabBarIcon: ({color}) => (
            <View style={{
              backgroundColor: Colors.primary500,
              width: 70,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              borderWidth: 2,
              borderColor: Colors.accent500
            }}>
              <Text style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
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
          title: 'Messages',
          tabBarIcon: ({color}) => (
            <Ionicons name='chatbox' color={color} size={28}/>
          ),
        }}
      />
      <BottomTab.Screen 
        name="UserProfile" 
        component={UserProfileScreen} 
        options={{
          title: 'My Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name='person' color={color} size={28}/>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;