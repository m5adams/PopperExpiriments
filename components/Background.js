import { StyleSheet, View } from "react-native";

import Colors from "../constants/colors";

const Background = () => {
  return(
  <View style={styles.backgroundLayer}>
    <View style={styles.rectangleOne}>
    
    </View>
    <View style={styles.rectangleNine}>
    
    </View>
    <View style={styles.rectangleTwelve}>
    
    </View>
    <View style={styles.rectangleEleven}>
    
    </View>
    <View style={styles.rectangleTen}>
    
    </View>
  </View>
  );
};

export default Background

const styles = StyleSheet.create({
  backgroundLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Colors.primary500
  },
  rectangleOne: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Colors.primary500,
    borderRadius: 40,
  },
  rectangleNine: {
    position: 'absolute',
    width: 304.23,
    height: 725.14,
    left: -168.19,
    top: 180.6,
    backgroundColor: 'rgba(154, 147, 197, 0.15)',
    filter: 'blur(2)',
    borderRadius: 63,
    // transform: [{rotate(-14)}],
  
  },
  rectangleTwelve: {
    position: 'absolute',
    width: 161,
    height: 453,
    left: 254,
    top: 0,
    backgroundColor: 'rgba(253, 220, 105, 0.04)',
    filter: 'blur(2)',
  },
  rectangleEleven: {
    position: 'absolute',
    width: 127,
    height: 276,
    left: 0.5,
    top: 270.5,
    backgroundColor: 'rgba(253, 220, 105, 0.07)',
    filter: 'blur(2)',
  },
  rectangleTen: {
    position: 'absolute',
    width: 324,
    height: 467,
    left: 92,
    top: 0,
    backgroundColor: 'rgba(154, 147, 197, 0.15)',
    filter: 'blur(1)',
  },
});