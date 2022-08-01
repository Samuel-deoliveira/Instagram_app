import React, {useState, useRef} from 'react';
import { View, Text, Alert, Modal, Pressable, TouchableHighlight, Image, StyleSheet, Appearance, Animated, Dimensions, ScrollView, FlatList } from 'react-native';

import {InfoUser} from '../components/user/InfoUser'
import {InfoNomberUser} from '../components/user/InfoNomberUser'
import {StorySpotLight} from '../components/user/StorySpotLight'
import {ButtonEditProfil} from '../components/user/button/ButtonEditProfil'
import {TopBarUser} from '../components/user/TopBarUser'
import {NavPublication} from '../components/user/button/NavPublication'
// const colorScheme = Appearance.getColorScheme();
// if (colorScheme === 'dark') {
//   console.log("t")
//   // Use dark color scheme
// }

// else if (colorScheme === 'light') {

// }

export function AccountView() {

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <View style={{flexDirection: 'column'}}>
        {/* top bar */}
        <TopBarUser/>
        <ScrollView>
          {/* Info number of user */}
          <InfoNomberUser/>
          {/* Info user */}
          <InfoUser/>
          {/* button modif profil */}
          <ButtonEditProfil/>
          {/* stories */}
          <StorySpotLight/>
          {/* button from publicationUSer or publicationMention*/}
        </ScrollView>
        <NavPublication/>
        {/* <FlatList data={formatData(data, numColumns)} renderItem={renderItem} style={styles.container} numColumns={numColumns}/> */}
      </View>
    </View>
  )
}
