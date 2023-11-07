import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Orders.styles";
import { Header } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { clearOrders } from "../../featuers/cart/cartSlice";

const Orders = () => {
  const {updatedAt, orders} = useSelector((state) => state.cart);
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClearOders = () => {
    dispatch(clearOrders());
  };

  const totalOrders = orders.reduce((acc, order) => acc + order.total, 0);

  return (
    <>
    <Header title={'Ordenes de Compra'}/>
    <ScrollView>
      {orders.length > 0 ? (
        <>
        <Text style={styles.userInfo} >Usuario: {user}</Text>
        <Text style={styles.info}>Ultima sesion: {updatedAt}</Text>
            <Text style={styles.orderText}>Ordenes de compra: </Text>
            {orders.map((order, index) => (
              <View key={index} style={styles.orderContainer}>
                <Text style={styles.orderText}>Datos: {order.date}</Text>
                <Text style={styles.orderInfor}>Total: US$ {order.total}</Text>
                <Text style={styles.orderInfor}>Productos:</Text>
                {order.items.map((item) => (
                  <Text key={item.id} style={styles.orderInfor}>
                    <Text>Libro: {item.title}</Text>
                    {"\n"}
                    <Text>{`Cantidad: ${item.quantity}`}</Text>
                    {"\n"}
                    <Text>{`Precio unitario: US$${item.price}`}</Text>
                  </Text>
                ))}
              </View>
            ))}
            <Text style={styles.total}>Total de la compra: US${totalOrders}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleClearOders}
            >
              <Text style={styles.buttonText}>Eliminar Ordenes</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.noOrderContainer}>
            <Text style={styles.noOrderText}>
              No hay ninguna orden pendiente.
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};      

export default Orders;
