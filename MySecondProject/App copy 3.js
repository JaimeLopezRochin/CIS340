import { StatusBar } from 'expo-status-bar';
import {Text, TextInput, View} from 'react-native';

function MyApp() {
  return(
    <View>
      <Text>
        {"\n\n\n\n\n\n"}
        Yuh, how does he does it! {"\n"}
        </Text>
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
<Text> {"\n\n\n\n\n\n"} WELCOME text </Text>
<MyApp />
<MyApp />
<MyApp />
<MyApp />
    </View>
  )
}
