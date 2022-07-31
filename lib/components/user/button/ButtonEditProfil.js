import React, {useState} from 'react';
import { Text, TouchableHighlight, } from 'react-native';

export function ButtonEditProfil() {

  const onPress = () => {
  
  }

  return (
    <TouchableHighlight underlayColor="#1B1B1B"  onPress={onPress} style={{
      backgroundColor: '#262626', 
      alignItems: 'center', 
      borderRadius: 6, 
      paddingTop: 5, 
      paddingBottom: 5, 
      marginLeft: 18, 
      marginRight: 18,
      marginTop: 12
      }}>
      <Text style={{color:'white'}}>Modif Profil</Text>
    </TouchableHighlight >
  )
}