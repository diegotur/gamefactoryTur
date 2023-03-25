import { FlatList } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../store/actions/category.action'

const CategoriesScreen = ({ navigation }) => {

const categories = useSelector(state=> state.categories.categories) 

const dispatch = useDispatch()


    const onHandleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Juegos', {
            categoryName: item.title
        })
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onHandleSelectedCategory} />


    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={1}
        />
    )
}

export default CategoriesScreen
