import { StatusBar } from 'expo-status-bar';
import {Text} from 'react-native';

export default function MyApp() {

  function getFullName(fName,mName, lName) {
    return fname + " " + mName + " " + lName;
  }

  const pet = "Dog";
  return(
      <Text>
        {"\n\n\n\n\n\n"}
        Yuh, how does he does it! {"\n"}
        My full name is {getFullName("Jaime", "Lopez", "Rochin")} {"\n"}
        I have a {pet}!
        </Text>
    
    
  );
}


