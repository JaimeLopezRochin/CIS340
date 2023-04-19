import React from 'react';
import { Text, Image, FlatList } from 'react-native';

  


export default StatesApp = () => {
  return (
    <View style={{flex: 1, paddingTop: 22}}>
    <FlatList
      data={[
        {key: 'Sonora'},
        {key: 'Sinaloa'},
        {key: 'Oaxaca'},
        {key: 'Nuevo León'},
        {key: 'DF'},
        {key: 'Aguascalientes'},
        {key: 'Jalisco'},
        {key: 'Nayarit'},
        {key: 'San Luis'},
        {key: 'Tlaxcala'}

      ]}
returnItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text> }

      />
    </View>
  );
}//end of return statment