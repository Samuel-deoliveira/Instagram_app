import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, FontAwesome  } from '@expo/vector-icons';

export function TopBar() {

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 10, paddingTop: 14, marginLeft: 18}}>
      <Text style={{fontSize:22, color: 'white', fontWeight: "700"}}>samuel.deoliveira1</Text>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
      <FontAwesome name="plus-square-o" size={24} color="white" style={{flex: 1, textAlign: 'right', marginRight: 26}} />
      <FontAwesome name="navicon" size={24} color="white" style={{marginRight: 16}}/>
    </View>
  )
}