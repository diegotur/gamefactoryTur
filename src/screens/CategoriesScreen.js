import { ImageBackground, FlatList, View, StyleSheet } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../store/actions/category.action'
import image from "../../assets/gamefactory.png"

const CategoriesScreen = ({ navigation }) => {

    const categories = useSelector(state => state.category.categories)


    const dispatch = useDispatch()


    const onHandleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Juegos', {
            categoryName: item.title
        })
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onHandleSelectedCategory} />


    return (
        <View >
            <ImageBackground source={image} resizeMode="contain" style={styles.image} />


            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={renderGridItem}
                numColumns={1}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    image: {
        height: 400,
    }
})