import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import styles from './Cartitem.style'
import Entypo from '@expo/vector-icons/Entypo'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../../featuers/cart/cartSlice'

const Cartitem = ({item}) => {

  const dispatch = useDispatch();
  function deleteItem() {
    dispatch(removeItem(item.id))
  }

  return (
    <View style={styles.container}>
      <View>
       <Image 
        style={styles.image}
        source={{uri: item.images[0]}}
        />
      </View>
      <View>
        <Text style={styles.name}>Libro: {item.title}</Text>
      </View>
      <View style={styles.details}>
        <View>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>Precio: US${item.price}</Text>
        </View>
        <Pressable onPress={deleteItem}>
            <Entypo name="trash" size={24} color={"black"}/>
        </Pressable>
      </View>
    </View>
  )
}

export default Cartitem