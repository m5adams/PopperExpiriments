import { StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Colors from '../constants/colors';
import UserFeedScreen from '../screens/userprofile/UserFeedScreen';
import UserMediaScreen from '../screens/userprofile/UserMediaScreen';
import UserProfileScreen from '../screens/userprofile/UserProfileScreen';

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigatorUser() {
  return (
    <SafeAreaView style={styles.container}>

      <UserProfileScreen/>

      <TopTab.Navigator screenOptions={{
          tabBarStyle: {
            borderColor: Colors.accent500,
            borderBottomWidth: 1,
            backgroundColor: Colors.primary500
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
              width: 40,
              borderRadius: 30,
              marginBottom: 10,
              left: 78
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
            width: 48,
            borderRadius: 30,
            marginBottom: 10,
            left: 74
          },
          }} 
        />
      </TopTab.Navigator>
    </SafeAreaView>
  );
};

export default TopTabNavigatorUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});