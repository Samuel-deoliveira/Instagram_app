import React from 'react';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

import { HomeView } from '../../lib/views/HomeView'
import { SearchView } from '../../lib/views/SearchView'
import { ReelsView } from '../../lib/views/ReelsView'
import { StoreView } from '../../lib/views/StoreView'
import { AccountView } from '../../lib/views/AccountView'

import HomeIcon from '../../assets/pictures/buttonNav/home.png'
import HomeIconFoul from '../../assets/pictures/buttonNav/home_foul.png'
import SearchIcon from '../../assets/pictures/buttonNav/search.png'
import ReelsIcon from '../../assets/pictures/buttonNav/reels.png'
import StoreIcon from '../../assets/pictures/buttonNav/store.png'
import user from '../../assets/pictures/users/user.jpg'

export function NavBar() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={ {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          bottom: 0,
          marginHorizontal: 0,
          height: 50,
          paddingHorizontal: 5,
        }
      }}>

        <Tab.Screen name={"Home"} component={HomeView} options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Image source={focused ? HomeIconFoul : HomeIcon} style={{height: 22, width: 22, tintColor: '#ffffff'}} />
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Search"} component={SearchView} options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Image source={SearchIcon} style={focused ? styles.searchIconFocus : styles.searchIcon} />
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Reels"} component={ReelsView} options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Image source={ReelsIcon} style={{height: 22, width: 22, tintColor: '#ffffff'}} />
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Store"} component={StoreView} options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Image source={StoreIcon} style={{height: 22, width: 22, tintColor: '#ffffff'}} />
            </View>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Account"} component={AccountView} options={{
          tabBarIcon: ({focused}) => (
            <View style={{top: 5}}>
              <View style={focused ? styles.accountIconFocus : styles.accountIcon}>
                <Image source={user} style={{height: 28, width: 28, borderRadius: 100}} />
              </View>
            </View>
          )
        }}></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  button: {
    top: 5,
  },

  searchIconFocus: {
    width:23,
    height:23,
    tintColor: '#ffffff'
  },

  searchIcon: {
    width:22,
    height:22,
    tintColor: '#ffffff'
  },

  accountIconFocus: {
    height: 32, 
    width: 32, 
    borderRadius: 100, 
    backgroundColor: '#ffffff', 
    alignItems: 'center', 
    justifyContent: 'center',
  },

  accountIcon: {
    height: 32, 
    width: 32, 
    borderRadius: 100,  
    alignItems: 'center', 
    justifyContent: 'center'
  },

});