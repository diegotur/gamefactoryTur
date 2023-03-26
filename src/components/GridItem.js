import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'

const GridItem = ({
    item,
    onSelect
}) => {

  return (
    <View style={styles.gridItem}>
        <TouchableOpacity onPress={() => onSelect(item)} style={[styles.container, { backgroundColor: COLORS.primary}]}>
            <View>
            <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 50,
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 15,
        elevation: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 20,
    }
})