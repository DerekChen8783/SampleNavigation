'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class TabProfileScreen extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Profile Page' }</Text>
        <TouchableOpacity
          //onPress={ () => this.props.navigation.navigate('TabOneScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'profile!!'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
