import React, {useState} from 'react';
import { View, Text, Alert, Modal, Pressable, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { MaterialIcons, Feather, Entypo, FontAwesome5 } from '@expo/vector-icons';

import LinearGradient from 'react-native-linear-gradient';

import {TopBarHome} from '../components/home/TopBarHome'
import {StoryUser} from '../components/home/StoryUser'
import {PublicationCard} from '../components/publication/PublicationCard'

import user from '../../assets/pictures/users/user.jpg'
import test from '../../assets/pictures/test.jpg'
import comment from '../../assets/pictures/comment.png'



export function HomeView() {

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      {/* TopBar */}
      <TopBarHome/>
      {/* bar separator */}
      <View style={{width: '100%', height: 0.5, backgroundColor: '#262626'}} ></View>
      <ScrollView showsVerticalScrollIndicator={false} >
        {/* sto */}
        <StoryUser/>
        {/* bar separator */}
        <View style={{width: '100%', height: 0.5, backgroundColor: '#262626'}} ></View>
        {/* publication */}
        <PublicationCard/>
      </ScrollView>
    </View>
  )
}