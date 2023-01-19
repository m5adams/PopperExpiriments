import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/colors'; 

const UserProfileScreen = () => {

  return (
    <>
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

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, marginLeft: 20}}>
            <Image style={styles.profilePic} source={require('../../assets/images/mirai.png')}/>
          </View>

          <View style={{flex: 2, alignItems: 'center'}}>
            <Text style={styles.name}>Mirai Adams</Text>

            <Text style={styles.bio}>UCSD 22'</Text>
          </View>
        </View>
          <Text style={{fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,}}>Friends List</Text>
      </View>
      </>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
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
    height: 125,
    width: 125,
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 200
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

