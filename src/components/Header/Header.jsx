import { Text, View, Pressable } from 'react-native'
import React from 'react'
import styles from './Header.style'
import {Entypo} from '@expo/vector-icons'
import { colors } from '../../constants/colors'


const Header = ({ title }) => {
  return (


   
    <View style={styles.container}>
      
      <Text style={styles.text}>{title}</Text> 
      
    </View>
      
  )
}

export default Header