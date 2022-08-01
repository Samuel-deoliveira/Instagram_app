import React, {useRef, useState} from 'react';
import { View, TouchableHighlight, Animated, Dimensions, Text, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

import Carousel from 'react-native-snap-carousel'

export function NavPublication() {

  const sliderWidth = Dimensions.get('window').width;

  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  const [button1, setButton1] = useState(true)
  const [button2, setButton2] = useState(true)

  function buttonPublicationUser() {
    setButton1(true)
    setButton2(false)
    Animated.spring(tabOffsetValue, {
      toValue: getWidth(0),
      useNativeDriver: true
    }).start()
  }
  function buttonPublicationMention() {
    setButton1(false)
    setButton2(true)
    Animated.spring(tabOffsetValue, {
      toValue: getWidth(1),
      useNativeDriver: true
    }).start()
  }

  function getWidth(value) {
    let width = Dimensions.get("window").width

    if (value === 0) {
      width -= width
    }
    else if (value === 1) {
      width /= 2
    }

    return width 
  }

  const [state, setState] = useState(
  {
    activeIndex:0,
    carouselItems: [
    {
      title:"Publication",
      text: "User",
    },
    {
      title:"Publication",
      text: "Mention",
    }
  ]})

  const test = [
    {
      title:"Publication",
      text: "User",
    },
    {
      title:"Publication",
      text: "Mention",
    }
  ]

  const _renderItem = ({item,index}) => {

    if (state.activeIndex === 0) {
      buttonPublicationUser()

      return (
        <View style={{
          backgroundColor:'blue',
          borderRadius: 5,
          height: 335,
          padding: 50
          }}>
        </View>
      )

    }
    else if (state.activeIndex === 1) {
      buttonPublicationMention()

      return (
        <View style={{
          backgroundColor:'red',
          borderRadius: 5,
          height: 335,
          padding: 50
          }}>
        </View>
      )

    }

    
  }

  return (
    <View>
      <View style={{flexDirection: 'row', width: '100%', marginTop: 30}}>
        <TouchableHighlight style={{width: '50%', alignItems: 'center'}} onPress={buttonPublicationUser}>
          <MaterialIcons name="grid-on" size={24} color={button1 ? '#ffffff': 'gray'} />
        </TouchableHighlight>
        <TouchableHighlight style={{ width: '50%', alignItems: 'center'}} onPress={buttonPublicationMention}>
          <MaterialCommunityIcons name="tooltip-account" size={24} color={button2 ? '#ffffff': 'gray'} />
        </TouchableHighlight>
      </View>
      <View style={{flexDirection: 'row', width: '100%', marginTop: 20}}>
        <Animated.View style={{
          width: '50%', 
          height: 2, 
          position: 'absolute',
          backgroundColor: 'white',
          marginLeft: getWidth(0) ,
          transform: [{translateX: tabOffsetValue}]
        }}>
        </Animated.View>
        <View style={{width: '100%', height: 0.5, backgroundColor: '#262626'}}></View>
      </View>
      <View style={{ marginTop: 2}} >
        <Carousel 
          layout={"default"}  
          data={test} 
          sliderWidth={sliderWidth} 
          itemWidth={sliderWidth} 
          renderItem={_renderItem} 
          onSnapToItem = { index => setState({activeIndex:index}) }
          firstItem={0}
        /></View>
    </View>
  )
}