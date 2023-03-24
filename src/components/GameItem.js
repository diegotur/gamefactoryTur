import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const BreadItem = ({ item, onSelected }) => {

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details} > $ {item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BreadItem

const styles = StyleSheet.create({

    breadItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#333'
    },
    title: {
        fontSize: 20,
        color: "white",
        fontFamily: 'OpenSans_700Bold',
    },
    details: {
        fontSize: 16,
        color: "white",

    }
})