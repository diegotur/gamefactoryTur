import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const GameDetailScreen = ({ route, navigation}) => {

  const { games } = route.params


  useEffect(() => {
    navigation.setOptions({
      title: games.name
    })
  },[])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{games.name}</Text>
      <Text>{games.description}</Text>
      <Text>Price: ${games.price}</Text>
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