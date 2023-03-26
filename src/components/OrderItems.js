import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/colors'

const formatDay = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString();
}

const OrderItems = ({ item, onDelete }) => {

    const gameNames = item.items.map((n) => n.name);

    const names = gameNames.join(", ")

    return (
        <View style={styles.order}>
            <View>
                <Text style={styles.date}>{formatDay(item.date)}</Text>
                <Text style={styles.game}>{names}</Text>
                <Text style={styles.total}>${item.total}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="md-trash" size={22} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderItems

const styles = StyleSheet.create({
    order: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        margin: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,

    },
    date: {
        fontSize: 16,
    },
    total: {
        fontSize: 18,
        fontFamily: "OpenSans_700Bold"
    },
    game: {
        fontSize: 28,
        marginTop: 15,
        width: 300,
    }
})