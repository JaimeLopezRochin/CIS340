import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'// import
import * as sharing from 'expo-sharing';//import image sharing

export default function App() {

  const [selectedImage, setSelectedImage ] = React.useState(null)

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionAsync();
    if (permissionResult.granted ===false){
      alert("you need permission");
      return ;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri});

  };

  let openSharingDialogAsync =async () => {
    if ( !(await Sharing.isAvailable())){
      alert('sharing is not avalible on the phone')
    }
    Sharing.shareAsync(selectedImage.localUri);
  };

//disp;ay selected image
  if (selectedImage !== null) {
    return(
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri}} style={styles.selImage} />

      <TouchableOpacity onPress={openSharingDialogAsync} style={styles.button}>
        <Text style={styles.buttonText}> share my Photo</Text>
      </TouchableOpacity>
      </View>
    )
  }

  //end of code
  
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/mydog2.png"}}
        style={styles.logo} />
      <Text style={styles.insts}>
            press the buttom below to select an image on the phone!
        </Text>


      <TouchableOpacity style={styles.button} onPress={() => alert('you have not selected')} >
    
            <Text style={styles.buttonText}> pick image</Text>

          </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#778899",

  },

  button: {
    backgroundColor: "#7FFFD4",
    padding: 20,
    borderRadius: 5
  },

  insts: {
    frontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
        width:340,
        height: 320,
        marginBottom: 25
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  },

  selImage: {
    width: 350,
    height: 300,
    resizeMode: 'contain'
  }
  
});

