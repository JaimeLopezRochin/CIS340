import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

  const dog = {
    uri: 'C:\Users\nodejs\Downloads',
    width: 64,
    height: 64
  }

  export default MyScrollViewApp = ()  => (


    <ScrollView style={{padding: 40}}> 
    <Text style={{fontSize: 80}}> you can scroll down now </Text>
    <Image Source={require('./asset/dog2.jpg')} style={{width: 64, height: 64}} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Text style={{fontSize: 80}}> you can scroll down again, ya dig </Text>
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Text style={{fontSize: 69}}> Keep On Going </Text>
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Text style={{fontSize: 80}}> Dale! sin miedo al exito </Text>
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    <Image Source={dog} />
    </ScrollView>

  );
