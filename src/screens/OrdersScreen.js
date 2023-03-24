import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import OrderItems from '../components/OrderItems'
import { ORDERS } from '../data/orders'


const OrdersScreen = () => {

    const onDelete = (id) => {
        console.log("delete", id)
    }

    const renderItem = ({ item }) => <OrderItems item={item} onDelete={onDelete} />
    return (
        <View style={styles.container}>
            <FlatList
                data={ORDERS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />
        </View>
    )
}

export default OrdersScreen

const styles = StyleSheet.create({
    container: {
        marginTop:60,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
