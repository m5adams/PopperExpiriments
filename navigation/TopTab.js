import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Colors from '../constants/colors';
import UserFeedScreen from '../screens/userprofile/UserFeedScreen';
import UserMediaScreen from '../screens/userprofile/UserMediaScreen';

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <TopTab.Navigator screenOptions={{
        tabBarStyle: {
          borderColor: Colors.accent500,
          borderBottomWidth: 1,
          backgroundColor: 'transparent'
        },
        tabBarLabelStyle: {
          color: 'white',
          fontWeight: '400',
          fontSize: 14,
        },
      }}
    >
      <TopTab.Screen name="Feed" component={UserFeedScreen}
        options={{
          title: 'Feed',
          tabBarIndicatorStyle:{
            position: 'absolute',
            backgroundColor: Colors.accent500,
            height: 3,
            width: 45,
            borderRadius: 30,
            marginBottom: 10,
            left: 75
          },
        }} 
      />
      <TopTab.Screen name="Media" component={UserMediaScreen} 
        options={{
          title: 'Media',
          tabBarIndicatorStyle:{
          position: 'absolute',
          backgroundColor: Colors.accent500,
          height: 3,
          width: 55,
          borderRadius: 30,
          marginBottom: 10,
          left: 70
        },
        }} 
      />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;