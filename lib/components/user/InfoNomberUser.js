import React, {useState} from 'react';
import { View, Text, Alert, Modal, Pressable, TouchableHighlight, Image, StyleSheet, Appearance } from 'react-native';
import { MaterialIcons, EvilIcons, FontAwesome , Fontisto, AntDesign  } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';

import user from '../../../assets/pictures/users/user.jpg'

export function InfoNomberUser() {

  return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <LinearGradient colors={['#9E2692', '#FAA958']} style={{ width: 88, height: 88, borderRadius: 100, marginLeft: 16, alignItems: 'center', justifyContent: 'center'}} >
          <TouchableHighlight style={{ width: 83, height: 83, borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}} >
            <Image source={user} style={{ width: 78, height: 78, borderRadius: 100 }}/>
          </TouchableHighlight>
        </LinearGradient>
        {/* publication */}
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', white: '100%'}} >
          {/* publication */}
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: "700"}} >0</Text>
            <Text style={{color: 'white', fontSize: 13, fontWeight: "400", marginTop: 1}}>Publications</Text>
          </View>
          {/* followers */}
          <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 20}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: "700"}}>171</Text>
            <Text style={{color: 'white', fontSize: 13, fontWeight: "400", marginTop: 1}}>Abonnés</Text>
          </View>
          {/* following */}
          <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 20}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: "700"}}>352</Text>
            <Text style={{color: 'white', fontSize: 13, fontWeight: "400", marginTop: 1}}>Abonneme...</Text>
          </View>
      </View>
    </View>
  )

}