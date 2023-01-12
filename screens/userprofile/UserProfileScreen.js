import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/colors'; 
import TopTabNavigator from '../../navigation/TopTab';

const UserProfileScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.userNameContainer}>
          <View>
            <Image style={styles.image} source={require('../../assets/images/bubble.png')}/>
          </View>
          <Text style={styles.userName}>miraiadams</Text>

          <View style={styles.iconContainer} >
            <Pressable style={({pressed}) => pressed ? styles.pressed : []}>
              <Ionicons style={styles.icon} name='menu' color={Colors.accent500} size={34}/>
            </Pressable>
          </View>
        </View>

        <View style={styles.profileContentContainer}>
          <Image style={styles.profilePic} source={require('../../assets/images/mirai.png')}/>
          
          <Text style={styles.name}>Mirai Adams</Text>

          <Text style={styles.bio}>UCSD 22'</Text>
        </View>
        
        <TopTabNavigator />
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.primary500,
  },
  userNameContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    height: 85,
    width: 70,
    marginHorizontal: 20
  },
  userName: {
    fontSize: 26,
    color: 'white',
    fontWeight: '300',
    marginTop: 20,
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
  },
  icon: {
    marginTop: 20
  },
  profileContentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePic: {
    height: 150,
    width: 150,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  bio: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
    marginBottom: 20,
  },
  pressed: {
    opacity: 0.5
  },
});

