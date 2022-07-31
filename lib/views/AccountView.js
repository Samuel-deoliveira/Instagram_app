import React, {useState, useRef} from 'react';
import { View, Text, Alert, Modal, Pressable, TouchableHighlight, Image, StyleSheet, Appearance, Animated, Dimensions, ScrollView, FlatList } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

import {InfoUser} from '../components/user/InfoUser'
import {InfoNomberUser} from '../components/user/InfoNomberUser'
import {StorySpotLight} from '../components/user/StorySpotLight'
import {ButtonEditProfil} from '../components/user/button/ButtonEditProfil'
import {TopBar} from '../components/user/TopBar'
import {NavPublication} from '../components/user/button/NavPublication'
import { back } from 'react-native/Libraries/Animated/Easing';
// const colorScheme = Appearance.getColorScheme();
// if (colorScheme === 'dark') {
//   console.log("t")
//   // Use dark color scheme
// }

// else if (colorScheme === 'light') {

// }

const data = [
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
  { key: 'K' },
  { key: 'L' },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;

export function AccountView() {

  const renderItem = ({item, index}) => {

    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]}></View>
    }

    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <View style={{flexDirection: 'column'}}>
        {/* top bar */}
        <TopBar/>
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
        <FlatList
        data={formatData(data, numColumns)}
        renderItem={renderItem}
        style={styles.container}
        numColumns={numColumns}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});