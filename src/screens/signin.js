import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import style from './formStyle'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setEmail, setPassword } from '../redux/actions'
import AsyncStorage from '@react-native-async-storage/async-storage'
function Signin({ navigation }) {
  const [hidePass, setHidePass] = useState(true);
  const { email, password } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  async function checkUserSignedIn() {
    try {
      let userEmail = await AsyncStorage.getItem('Email');
      let userPass = await AsyncStorage.getItem('Password');
      if (userEmail == email && userPass == password) {
        Alert.alert("Success", 'Verified')
        navigation.navigate('Home')
      }
      else {
        Alert.alert("Warning", 'User not found')
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={style.container} >
      <KeyboardAvoidingView>
        <View style={style.Header}>
          <Text style={style.headingtext}>Verify now !</Text>
        </View>
        <View style={style.form}>
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
          <Text style={style.forgot}>Forgot Password ?</Text>
          <View style={style.buttonSec}>
            <TouchableOpacity style={style.buttonFilled} onPress={(() => checkUserSignedIn())}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonOutlined} onPress={(() => navigation.navigate('Signup'))}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#019386' }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Signin;