import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import style from './formStyle'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setEmail, setPassword } from '../redux/actions'
import AsyncStorage from '@react-native-async-storage/async-storage'
function Signup({ navigation }) {
  const { name, email, password } = useSelector(state => state.userReducer)
  const [hidePass, setHidePass] = useState(true);
  const dispatch = useDispatch()
  let validatePass = (pass) => {
    const passregex = /^(?=.*[A-Z])+(?=.{6,})/
    return passregex.test(pass)
  }
  async function clickSignUp() {
    let validateEmail = (email) => {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return emailRegex.test(email);
    }
    if (!validateEmail(email) && name.length == 0 && !validatePass(password)) {
      Alert.alert("Error", "Please fill the all Input")
    }
    else if (validateEmail(email) && name.length != 0 && validatePass(password)) {
        try {
        Alert.alert("Success", "You are Registered")
        await AsyncStorage.setItem('UserName', name)
        await AsyncStorage.setItem('Email', email)
        await AsyncStorage.setItem('Password', password)
        console.log('user save ho gaya ')
        navigation.navigate('Signin')
      }
      catch (error) {
        console.log(error)
      }
    }
  }
  function clickSignIn() {
    navigation.navigate('Signin')
  }
  return (
    <View style={style.container} >
      <KeyboardAvoidingView>
        <View style={style.Header}>
          <Text style={style.headingtext}>Register Now!</Text>
        </View>
        <View style={style.form}>
          <Text style={style.text}>Your Name</Text>
          <View style={style.inputBox}>
            <Feather name='lock' light size={20} color={'#019386'} />
            <TextInput onChangeText={(value) => dispatch(setName(value))} style={style.input} placeholder='Enter your Name' />
          </View>
          <Text style={style.text}>Email</Text>
          <View style={style.inputBox}>
            <FontAwesome5 name='user' size={20} color={'#019386'} />
            <TextInput onChangeText={(value) => dispatch(setEmail(value))} keyboardType='email-address' style={style.input} placeholder='Your Email' />
          </View>
          <Text style={style.text}>Password</Text>
          <View style={style.inputBox}>
            <Feather name='lock' light size={20} color={'#019386'} />
            <TextInput onChangeText={(value) => dispatch(setPassword(value))} secureTextEntry={hidePass ? true : false} style={style.input} placeholder='Your Password' />
            <FontAwesome5 style={style.eye} name={hidePass ? 'eye-slash' : 'eye'} size={15} color={'#019386'} onPress={() => setHidePass(!hidePass)} />
          </View>
          <Text style={{ fontSize: 12, color: '#7A8A93' }}>By Signing up you agree to our <Text style={{ fontWeight: 'bold' }}>Terms of our Services</Text> and <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text></Text>
          <View style={style.buttonSec}>
            <TouchableOpacity style={style.buttonFilled} onPress={() => clickSignUp()}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonOutlined} onPress={() => clickSignIn()}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#019386' }}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Signup;