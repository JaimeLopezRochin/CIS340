import { React } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.containerButton}>
        <Button
          onPress= {() => {
            alert('You tappin a button');
          }}
          title="Press button 1"
      />
      </View>

    <View style={styles.containerLayoutButton}>
        <Button
          onPress= {() => {
            alert('You tappin a button, again');
          }}
          title="Press button 2"
    />

          <Button
          onPress= {() => {
            alert('You tappin a buttun 3peat');
          }}
          title="Great"
          color='green'
    />

    </View>


      <View style={styles.containerButton}>
        <Button
        onPress= {() => {
          alert('You tappin a buttun, tap me too!');
        }}
        title="tap me"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 25,
  },

  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

});
