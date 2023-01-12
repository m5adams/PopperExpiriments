import { createDrawerNavigator } from '@react-navigation/drawer';

import UserProfileScreen from '../screens/userprofile/UserProfileScreen';
import SettingsScreen from '../screens/userprofile/SettingsScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="UserProfile" 
        component={UserProfileScreen} 
      />

      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;