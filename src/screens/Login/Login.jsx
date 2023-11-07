import { View, Text, TextInput, Pressable, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import {useLoginMutation} from '../../services/authApi'
import { useDispatch } from 'react-redux'
import {setUser} from '../../featuers/auth/authSlice'
import { insertSession } from '../../db'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [triggerLogin] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    triggerLogin({
      email,
      password,
    })
    .unwrap()
    .then(result => {
      dispatch(setUser(result))
      insertSession({
        localId: result.localId,
        email: result.email,
        token: result.idToken,
      })
      .then(result => console.log(result))
      .catch(error => console.log(error.message))
    })
  }

  const image = {uri: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/006-library-biblioteca-angelica-a-roma_0002.jpg?w=1900&h=1523'}



  return (
  <ImageBackground source={image} resizeMode='cover' style={styles.image}> 
    <View style={styles.loginContainer}>
        <View style={styles.loginContainer}> 
            <Text style={styles.baseText} >Comencemos! Ingresa con tu cuenta</Text>
            <TextInput style={styles.inputEmail} value={email} onChangeText={setEmail} />
            <TextInput style={styles.inputEmail} value={password} onChangeText={setPassword} />
            <Pressable style={styles.loginButton} onPress={onSubmit}>
                <Text style={{color:'white'}}>Ingresar</Text>
            </Pressable>
            <Text style={styles.text}>No tienes una cuenta?</Text>
            <Pressable style={styles.loginButton} onPress={()=> navigation.navigate('Signup')}>
                <Text style={{color:'white'}}>Registrate!</Text>
            </Pressable> 
        </View>
    </View></ImageBackground>
  )
}

export default Login