import React, {useRef} from 'react';
import { View, TouchableHighlight, Animated, Dimensions } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

export function NavPublication() {

  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function buttonPublicationUser() {
    Animated.spring(tabOffsetValue, {
      toValue: getWidth(0),
      useNativeDriver: true
    }).start()
  }
  function buttonPublicationMention() {
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

  return (
    <View>
      <View style={{flexDirection: 'row', width: '100%', marginTop: 30}}>
        <TouchableHighlight style={{width: '50%', alignItems: 'center'}} onPress={buttonPublicationUser}>
          <MaterialIcons name="grid-on" size={24} color="white" />
        </TouchableHighlight>
        <TouchableHighlight style={{ width: '50%', alignItems: 'center'}} onPress={buttonPublicationMention}>
          <MaterialCommunityIcons name="tooltip-account" size={24} color="white" />
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
    </View>
  )
}