import { React } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

const csuLogo = {
  uri: "https://media.istockphoto.com/vectors/ram-vector-id1003202434",
  width: 80,
  heigh: 80
};

  return (
    <View style={styles.container}>

      <Image
      style={styles.localCSULogo}
      source={require('./assets/CSULogo.jpg')}
      />
  
    <Image

    style={style.urlCUSLogo}
    source={{
      uri: "https://media.istockphoto.com/vectors/ram-vector-id1003202434"
    }}
  />

    <Image
      style={styles.urlCUSLogo}
      source={{
        uri: "https://media.istockphoto.com/vectors/ram-vector-id1003202434"
      }}
    />

      <image
      style={styles.stretchLogo}
      source={csuLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCUSLogo: {
    width: 50,
    height: 65,
  },

  stretchLogo: {
    width: 56,
    height: 130,
    resizeMode: 'contain',
  }
}); /*18:45*/
