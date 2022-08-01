import React, {useState} from 'react';
import { View, Text, Alert, Modal, Pressable, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';

import {TopBarHome} from '../components/home/TopBarHome'

export function HomeView() {

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      {/* TopBar */}
      <TopBarHome/>
    </View>
  )
}