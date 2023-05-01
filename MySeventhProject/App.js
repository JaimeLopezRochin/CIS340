import { Component, React } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class TouchableButton extends Component {
  _onPressButton(){
    alert('you tapped')
  }
  render(){
  return (
    <View style={styles.container}>

      <View style={styles.containerButton}>
        <Button
          onPress= {this._onPressButton}
          title="Press button 1"
      />
      </View>

    <View style={styles.containerLayoutButton}>
        <Button
          onPress= {styles.containerLayoutButton}
          title="Press button 2"
    />

          <Button
          onPress= {styles.containerLayoutButton}
          title="Great"
          color='green'
    />

    </View>


      <View style={styles.containerButton}>
        <Button
        onPress= {styles.containerLayoutButton}
        title="tap me"
        />
      </View>
    </View>
  );
}
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

})
