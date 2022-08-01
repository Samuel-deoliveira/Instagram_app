import React, {useState} from 'react';
import { View, Text, Alert, Modal, Pressable, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';

import LogoName from '../../../assets/pictures/logoName.png'

export function TopBarHome() {

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 10, paddingTop: 14, marginLeft: 18}}>
      <Image source={LogoName} style={{height: 30, width: 120, tintColor: '#ffffff'}} />
      <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
      <FontAwesome name="plus-square-o" size={24} color="white" style={{flex: 1, textAlign: 'right', marginRight: 24}} />
      <Feather name="heart" size={24} color="white" style={{marginRight: 24}} />
      <Feather name="send" size={24} color="white" style={{marginRight: 16}}/>
    </View>
  )

}