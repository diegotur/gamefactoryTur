import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const BreadItem = ({ item, onSelected }) => {

    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Image source ={{uri: item.image}} style={styles.img}/>
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
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        color: "black",
        fontFamily: 'OpenSans_700Bold',
    },
    details: {
        fontSize: 16,
        color: "black",

    },
    img: {
        width: 80,
        height:50,
        position: "absolute",
        marginLeft: 280,
    }
})