import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

export default function MapViews() {
  return (
    <View style={Style.Container}>
      <Text style={Style.headingtext}>Hello this maps</Text>
    <View>
    </View>
    </View>
  )
}
const Style = StyleSheet.create({
  Container: {
    flex: 1
  },
  headingtext: {
    fontSize: 32,
    color: 'grey',
    textAlign: 'center',
    borderWidth: 0.5,
  },
})