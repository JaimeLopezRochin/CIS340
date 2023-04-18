import React, {useState} from 'react';
import {Text, View, Image, Button } from 'react-native';

function TV(props) {

  const [isoff,setisoff] = useState(true);

  return(
  <View>
    <Text>
      {"\n\n\n\n"}
      This is {props.Name} TV, and it is {isoff ? "OFF" : "Turned On"}!
    </Text>
    <Button
    onPress={() => {
      setisoff(false);
    }}
    disabled={!isoff}
    title={isoff ? "Turn Me On, Please!" : "Thanks"}
    />
  </View>
  );
}

export default function MultiComp(){
  return(
    <View>
    <TV name="El G"/>
    <TV name="Sony"/>
  </View>
  );
}