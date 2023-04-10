import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { confirmCart, removeItem } from '../store/actions/cart.action'
import { COLORS } from '../constants/colors'


const CartScreen = () => {

  const cart = useSelector(state => state.cart.items)

  const total = useSelector(state => state.cart.total)

  const dispatch = useDispatch();

  const onHandleDeleteItem = (itemId) => {
    dispatch(removeItem(itemId))
  }

  const onConfirm = () => {
    dispatch(confirmCart(cart, total))
  }

  const renderItems = ({ item }) => <CartItem item={item} onDelete={onHandleDeleteItem} />

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cart}
        renderItem={renderItems}
        keyExtractor={(item) => item.id} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={onConfirm}>
          <Text>CONFIRMAR PEDIDO</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total:</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    backgroundColor: COLORS.primary,
  },
  confirm: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  total: {
    flexDirection: "row",

  },
  text: {
    fontSize: 18,
    fontFamily: "OpenSans_700Bold",
    padding: 8,
  }
})