import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.green}>Un porro de verde</Text>
      <Text style={styles.largeRed}>Big Red</Text>
      <Text style={[styles.green, styles.largeRed]}>green text, then Big Red ya dig</Text>
            <Text style={[styles.largeRed, styles.green]}>Big Red ya dig, then green</Text>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    marginTop: 60,
  },

  largeRed: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 13,
  },

  green: {
    color: 'green',
    fontSize: 13,

},
});
