import { FlatList } from 'react-native'
import React, {useEffect} from 'react'
import GameItem from '../components/GameItem'
import { useSelector, useDispatch } from 'react-redux'
import {filterGames, selectGame} from "../store/actions/games.action" 

const CategoryGameScreen = ({ navigation }) => {


const dispatch = useDispatch()

const categoryGames = useSelector(state => state.games.filteredGames)

const category = useSelector(state => state.category.selected)

useEffect(()=>{
  dispatch(filterGames(category.id))
},[])

const handleOnSelected = (item) => {
    dispatch(selectGame(item.id))
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
