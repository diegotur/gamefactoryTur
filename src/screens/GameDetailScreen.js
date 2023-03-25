import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux' 

const GameDetailScreen = () => {

  const game = useSelector(state => state.games.selected)


  useEffect(() => {
    navigation.setOptions({
      title: game
    })
  },[])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{game.name}</Text>
      <Text>{game.description}</Text>
      <Text>Price: ${game.price}</Text>
    </View>
  )
}

export default GameDetailScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold',
    }
})