import React, {useState} from 'react';
import { View, Text, Alert, Modal, Pressable, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import { MaterialIcons, Feather , Entypo  } from '@expo/vector-icons';

import LinearGradient from 'react-native-linear-gradient';
import user from '../../../assets/pictures/users/user.jpg'

export function StoryUser() {

  return (
    <View horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10, marginBottom: 10 }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}} >
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 16}}>
          <View>
            <Image source={user} style={{ height: 64, width: 64, borderRadius: 100, borderWidth: 0.5, borderColor: "#504F4F"}}/>
            <View style={{position: 'absolute', top: 42, left: 50, backgroundColor: '#4292EF', width: 18, height: 18, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}} >
              <Entypo name="plus" size={14} color="white" />
            </View>
          </View>
          <Text style={{color: 'white', fontSize: 12, fontWeight: '400', marginTop: 2}}>Votre story</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 20}}>
          <View>
            <LinearGradient colors={['#9E2692', '#FAA958']} style={{ width: 75, height: 75, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}} >
              <View style={{backgroundColor: '#000000', height: 70, width: 70, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}} >
                <Image source={user} style={{ height: 64, width: 64, borderRadius: 100, borderWidth: 0.5, borderColor: "#504F4F"}}/>
              </View>
            </LinearGradient>
          </View>
          <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>test</Text>
        </View>
      </View>
    </View>
  )

}