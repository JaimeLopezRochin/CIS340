import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'baseline'}}>
    <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
    <View style={{width: 50, height: 50, backgroundColor: 'green'}}/>
    <View style={{width: 50, height: 50, backgroundColor: 'pink'}}/>
   </View>
  );
}

