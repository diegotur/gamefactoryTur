import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/actions/cart.action'

const GameDetailScreen = () => {

  const game = useSelector(state => state.games.selected)
  const dispatch = useDispatch();

  const onHandleAddToCart = () =>{
    console.log("additem");
    dispatch(addItem({...game, quantity:1}))
  }

  return (
    <View style={styles.screen}>
      <Image source={{ uri: game.image }} style={styles.img} />
      <Text style={styles.title}>{game.name}</Text>
      <Text style={styles.subtitle}>{game.description}</Text>
      <Text style={styles.price}>Precio: ${game.price}</Text>
      <Button title='Agregar Juego' onPress={() => {
                onHandleAddToCart()
            }}/>
    </View>
  )
}

export default GameDetailScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontFamily: 'OpenSans_700Bold',
  },
  subtitle:{
    paddingTop: 15,
    fontSize: 20,
    fontFamily: 'OpenSans_700Bold',
  },
  price:{
    paddingTop: 15,
    fontSize: 16,
    fontFamily: 'OpenSans_700Bold',
    color: "red",

  },
  img: {
    marginTop: -150,
    width: "100%",
    height: 350,
  }
})