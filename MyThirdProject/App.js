import { StatusBar } from 'expo-status-bar';
import {Text, Image, View } from 'react-native';

export default function MyDawg() {
  return (
    <View>
      <Image source="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.k9md.org.nz%2Fresearch%2Fa-dog-s-nose&psig=AOvVaw1abezBsITs-KV4xdc1e7zc&ust=1681708178273000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJihmafRrf4CFQAAAAAdAAAAABAV"
      style={{width: 200, Hight: 200}}
      />
      <Text> Hello, this dog is name is Salsa.</Text>
    </View>
  );
}

