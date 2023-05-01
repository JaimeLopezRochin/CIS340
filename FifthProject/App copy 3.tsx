import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
   <View>
    <View style={{flex: 1, flexDirection: 'column', marginTop: 100}}/>
    <View style={{flex: 1, backgroundColor: 'red'}}/>
    <View style={{flex: 1, backgroundColor: 'purple'}}/>
    <View style={{flex: 1, backgroundColor: 'green'}}/>
   </View>
  );
}

