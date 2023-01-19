import React, { useState, useEffect } from "react";
import { Image, View, Pressable, Text, StyleSheet } from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function UploadImage() {
  const [image, setImage] = useState(null);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(JSON.stringify(_image));
    if (!_image.canceled) {
      setImage(_image.assets[0].uri);
    }
  };

  // const  checkForCameraRollPermission=async()=>{
  //   const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
  //   if (status !== 'granted') {
  //     alert("Please grant camera roll permissions inside your system's settings");
  //   }else{
  //     console.log('Media Permissions are granted')
  //   }
  // };

  // useEffect(() => {
  //   checkForCameraRollPermission()
  // }, []);

  return (
    <View style={styles.container}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 170, height: 170 }} />
      )}

      <View style={styles.uploadBtnContainer}>
        <Pressable onPress={addImage} style={styles.uploadBtn}>
          <Text>{image ? "Edit" : "Upload"} Image</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 170,
    width: 170,
    backgroundColor: "#efefef",
    borderRadius: 999,
    overflow: "hidden",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
