import React, { Component, useState } from 'react';
import { Text, TestInput, View, TextInput } from 'react-native';

export default function WordConverter() {
  const [text, setText]=useState('');
  return (
    <View style={{padding: 40}}>
      <TextInput
      style={{height: 40}}
      placeholder="Input text here"
      onChangeText={text => setText(test)}
      defaultValue={text}
      />
      <Text style={{padding: 42}}>
        {text.split('').map((word) => word && '*').join(' ')}
        </Text>
    </View>
  );
}

