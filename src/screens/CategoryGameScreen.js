import { FlatList } from 'react-native'
import React, {useEffect} from 'react'
import GameItem from '../components/GameItem'
import { useSelector, useDispatch } from 'react-redux'
import {selectGame, filterGames} from "../store/actions/games.action" 

const CategoryGameScreen = ({ navigation }) => {


const dispatch = useDispatch()

const categoryGames = useSelector(state => state.games.filteredGames)
const category = useSelector(state => state.categories.selected)

useEffect(()=>{
  dispatch(filterGames(category.Id))
},[])

const handleOnSelected = (item) => {
    navigation.navigate('Detalle', {
      games: item
    })
  }

  const renderGameItem = ({ item }) => (<GameItem item={item} onSelected={handleOnSelected} />)

  return (
    <FlatList 
      data={categoryGames}
      keyExtractor={(item) => item.id}
      renderItem={renderGameItem}
    />
  )
}

export default CategoryGameScreen
