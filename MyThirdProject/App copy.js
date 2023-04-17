import { StatusBar } from 'expo-status-bar';
import {Text, TextInput, View } from 'react-native';

function Student() {
  return (
    <View>
      <Text> Hey, this is your third project. Wow congrats</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        }}>
    <Text> Welcome to the Yabratory</Text>
    <Student />
    <Student />
    <Student />
    <Student />
    </View>
  );
}