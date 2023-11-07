import { View, Text, FlatList, Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import CartItem from './components/Cartitem'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopApi'
import { createOrder } from '../../featuers/cart/cartSlice'



const Cart = () => {

  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const [ triggerPost, result ] = usePostOrderMutation()
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();



const renderItem = ({item}) => <CartItem item={item}/>

const confirmCart = () => {
  triggerPost({total, cart, user:"LoggedUser"}),
  dispatch(createOrder())
}


  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
       <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
      </View>
      <View style={styles.boton}>
        <Text style={styles.cart}>{`Total: US$ ${total}`}</Text>
    <View >
            <Pressable onPress={confirmCart}>
          <Text style={styles.confirmar}>Confirmar</Text>
            </Pressable>
        
          </View>
      </View>
    </View>
  )
}

export default Cart