import { StatusBar } from 'expo-status-bar';
import {Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text> Hey, this is your {props.name}. Wow congrats</Text>
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
    <Student name="Stogie Mclugy" />
    <Student name="El Don"/>
    <Student name="Rootness Tootness"/>
    <Student name="Brezlen Cray"/>
    </View>
  );
}