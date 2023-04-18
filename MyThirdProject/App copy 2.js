import React from 'react';
import {Text, View, Image } from 'react-native';

export default function MyDawg() {

  let pic = {
    uri: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRPMKnq00NF_T7RusUNeLrSazRZM0S5O8_AOcw2iBTmYTxd3Q7uXf0sW41odpAKqSblKDMUMHGb8nZRo9g'};
  
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        }}>
      <Image source={pic}
      style={{width: 200, Hight: 200}}
      />
      <Text>Hello, this dog is name is Salsa.</Text>
    </View>
  );
}

