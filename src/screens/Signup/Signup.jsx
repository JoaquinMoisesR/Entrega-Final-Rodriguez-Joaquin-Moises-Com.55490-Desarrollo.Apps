import { View, Text, TextInput, Pressable, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import styles from './Signup.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../featuers/auth/authSlice'

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [triggerSignup, result] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log('Login Button')
    triggerSignup({
      email,
      password,
    })
    .unwrap()
    .then(result => {
      console.log(result)
      dispatch(setUser(result))
    })
    .catch(err => console.log(err))
  }
   
  const image = {uri: 'https://media.traveler.es/photos/63e4771c3195e23e77291da3/4:3/w_1996,h_1497,c_limit/Biblioteca-Nacional-de-Francia-La-salle-Ovale-Takuji-Shimmura.jpg'}


  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text style={styles.ingresoText}>Registrate para ingresar a Asspeto!!</Text>
            <Text style={styles.usuario}>Crear usuario</Text>
            <TextInput 
            style={styles.inputEmail} 
            value={email} 
            onChangeText={setEmail}
             />
             <Text style={styles.contraseña}>Contraseña</Text>
            <TextInput 
            style={styles.inputEmail} 
            value={password} 
            onChangeText={setPassword}
             />
             <Text style={styles.confirmar}>Confirmar Contraseña</Text>
            <TextInput 
            style={styles.inputEmail}
            value={confirmPass} 
            onChangeText={setConfirmPass} 
            />
            <Pressable style={styles.loginButton} onPress={onSubmit}>
                <Text style={{color:'white'}}>Vamos! Ingresemos</Text>
            </Pressable>
            <Text style={styles.count}>Ya tienes una cuenta?</Text>
            <Pressable style={styles.loginButton} onPress={()=> navigation.navigate('Login')}>
                <Text style={{color:'white'}}>Ingresa por aqui!</Text>
            </Pressable>
        </View> 
    </View></ImageBackground>
  )
}

export default Signup