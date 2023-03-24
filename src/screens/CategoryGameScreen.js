import { FlatList } from 'react-native'
import React from 'react'

import { GAMES } from '../data/games'
import GameItem from '../components/GameItem'

const CategoryGameScreen = ({ route, navigation }) => {

  const { categoryId } = route.params

  const games = GAMES.filter(games => games.category === categoryId)

  const handleOnSelected = (item) => {
    navigation.navigate('Detalle', {
      games: item
    })
  }

  const renderGameItem = ({ item }) => (<GameItem item={item} onSelected={handleOnSelected} />)

  return (
    <FlatList 
      data={games}
      keyExtractor={(item) => item.id}
      renderItem={renderGameItem}
    />
  )
}

export default CategoryGameScreen
