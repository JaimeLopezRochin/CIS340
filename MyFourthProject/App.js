import React from 'react';
import { Text, Image, SectionList } from 'react-native';

  


export default StatesApp = () => {
  return (
    <View style={{flex: 1, paddingTop: 22}}>
    <SectionList
      sections={[
        {title: 'A', data: ['Aguascalientes']},
        {title: 'D', data: ['DF']},
        {title: 'J', data: ['Jalisco']},
        {title: 'N', data: ['Nuevo León', 'Nayarit']},
        {title: 'O', data: ['Oaxaca']},
        {title: 'S', data: ['Sinaloa', 'Sonora', 'San Luis']},
        {title: 'T', data: ['Tlaxcala']},
   
      ]}// you can have more sections
renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text> }
renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 10,
paddingRight:10,
paddingBottom: 4,
fontSize: 14,
fontWeight: 'bold',
backgroundColor: '#9FA8DA',}}>{section.title}</Text>}//sets the color
keyExtractor={(item, index) =>index}

/>
</View>
);//end of return statment
}