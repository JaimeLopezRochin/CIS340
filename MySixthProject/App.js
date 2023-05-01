import { React } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

const csuLogo = {
  uri: "https://media.istockphoto.com/vectors/ram-vector-id1003202434",
};

  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} style={styles.image}></ImageBackground>

        <Text style={styles.text}> CSU Logo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: "row",
  },

  image: {
    flex: 1,
    resizemode: "cover",
    justifyContent: "center",
  },

  text: {
    color: "red",
    fontSize: 100,
    fontweight: 'bold',
  }
}); 
