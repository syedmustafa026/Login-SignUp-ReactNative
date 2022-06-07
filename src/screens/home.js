import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useSelector, useDispatch } from 'react-redux'
import style from './formStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'
function Home({ navigation }) {
  const { name, email, password } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  async function LogOut() {
    await AsyncStorage.removeItem('UserName')
    await AsyncStorage.removeItem('Email')
    console.log('user deleted')
    navigation.navigate('Signin')
  }
  return (
    <View style={style.container} >
      <KeyboardAvoidingView>
        <View style={style.Header}>
          <Text style={style.headingtext}>Home screen !</Text>
        </View>
        <View style={style.form}>
          <View style={{ marginVertical: 50 }}>
            <Text style={style.text}>Your Name: {name}</Text>
            <Text style={style.text}>Your Email: {email}</Text>
          </View>
          <View style={style.buttonSec}>
            <TouchableOpacity style={style.buttonFilled} onPress={() => LogOut()}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonOutlined} onPress={() => navigation.navigate('Maps')}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#08bfaf' }}>Go to Maps</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Home;