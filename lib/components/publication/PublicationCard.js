import React, {useState} from 'react';
import { View, Text, Alert, Modal, Pressable, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { AntDesign, Feather, Entypo, FontAwesome5 } from '@expo/vector-icons';

import user from '../../../assets/pictures/users/user.jpg'
import test from '../../../assets/pictures/test.jpg'
import comment from '../../../assets/pictures/comment.png'

const pictureWidth = Dimensions.get('window').width

export function PublicationCard() {

  return (
    <View style={{width: '100%', flexDirection: 'column', alignItems: 'center'}} >
      {/* info user publi */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10}} >
        <View style={{height: 30, width: 30, backgroundColor: 'white', marginLeft: 16 ,borderRadius: 100, borderWidth: 0.5, borderColor: "#504F4F"}} >
          <Image source={user} style={{height: 30, width: 30, borderRadius: 100}} />
        </View>
        <Text style={{fontSize: 14, color: 'white', fontWeight: '700', marginLeft: 10}} >samuel.deoliveira1</Text>
        <Feather name="more-vertical" size={20} color="white" style={{flex:1, textAlign: 'right', marginRight: 16}} />
      </View>
      {/* publi */}
      <Image source={test} style={{height: pictureWidth, width: pictureWidth}} />
      {/* botton */}
      <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 10}}>
        <Feather name="heart" size={24} color="white" style={{marginRight: 0, marginLeft: 16}} />
        <Image source={comment} style={{ tintColor: 'white', height: 30, width: 30, marginLeft: 16}} />
        <Feather name="send" size={24} color="white" style={{marginLeft: 16}}/>
        <Feather name="bookmark" size={24} color="white" style={{flex:1, textAlign: 'right', marginRight: 16}} />
      </View>
      {/* info publi */}
      <View style={{ width: '100%', flexDirection: 'column'}} >
        <Text style={{color: 'white', marginLeft: 16, marginTop: 5, fontSize: 13, fontWeight: '700'}} >145 J'aime</Text>
        <View style={{ marginRight: 16, marginLeft: 16}} >
          <Text style={{color: 'white', fontSize: 13, fontWeight: '700'}}>samuel.deoliveira1 <Text style={{fontSize: 13, fontWeight: '400', lineHeight: 20}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<Text style={{color:'#A8A8A8'}} >... plus</Text></Text></Text>
        </View>
      </View>
      {/* comment */}
      <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 10}} >
        <View style={{height: 30, width: 30, backgroundColor: 'white', marginLeft: 16 ,borderRadius: 100, borderWidth: 0.5, borderColor: "#504F4F"}} >
          <Image source={user} style={{height: 30, width: 30, borderRadius: 100}} />
        </View>
        <Text style={{color: '#A8A8A8', fontSize: 13, fontWeight: '400', marginLeft: 15}} >Ajouter un commentaire...</Text>
        <AntDesign name="pluscircleo" size={12} color="white" style={{flex: 1, textAlign: 'right', marginRight: 16}} />
      </View>
    </View>
  )

}