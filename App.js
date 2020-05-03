import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder,TouchableOpacity, ScrollView } from 'react-native';

import Screen1 from './pages/Screen1';
// import Screen2 from './pages/Screen2';

export default function App() {
  return (
    
    <View >
   <View style={styles.container}></View >
      <Screen1/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {

    width:1000,
    height:1000,
    top: -(930 / 2),
    position:'absolute',
    backgroundColor: '#f8552255',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius:500,
    borderBottomRightRadius:500
  },
});
