import React, {useState} from 'react';
import { View, Text, Alert, Modal, Pressable, TouchableHighlight, Image, StyleSheet, Appearance } from 'react-native';
import { MaterialIcons, EvilIcons, FontAwesome , Fontisto, AntDesign  } from '@expo/vector-icons';

import test from '../../../assets/pictures/test.jpg'

export function StorySpotLight() {
   
  return(
    <View style={{flexDirection: 'row', marginTop: 16}}>
      <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 16}}>
        <View style={{ height: 70, width: 70, borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#504F4F",}}>
          <Image source={test} style={{ height: 64, width: 64, borderRadius: 100}}/>
        </View>
        <Text style={{color: 'white', fontSize: 13, fontWeight: '400'}}>test</Text>
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 16}}>
        <View style={{ height: 70, width: 70, borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#ffffff",}}>
          <AntDesign name="plus" size={30} color="white" />
        </View>
        <Text style={{color: 'white', fontSize: 13, fontWeight: '400'}}>Nouveau</Text>
      </View>
    </View>        
  )

}