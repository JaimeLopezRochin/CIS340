import { StatusBar } from 'expo-status-bar';
import {Text, TextInput, View} from 'react-native';

export default function MyApp() {
  return(
    <View>
      <Text>
        {"\n\n\n\n\n\n"}
        Yuh, how does he does it! {"\n"}
        </Text>
        <TextInput
          style ={{
            height: 40,
            borderColor: "red",
            borderWidth: 1
          }}
          defaultValue = "Enter Your input"/>
        </View>
    
    
  );
}


