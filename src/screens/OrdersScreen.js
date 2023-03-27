import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import OrderItems from '../components/OrderItems'
import { useSelector, useDispatch } from 'react-redux'
import { showOrders } from '../store/actions/orders.action'



const OrdersScreen = () => {
    
    const orders = useSelector(state=> state.orders.orders)
    
    const dispatch = useDispatch()
    
    const onShowOrders = () =>{
        dispatch(showOrders())
    }

    const onDelete = (id) => {
        console.log("delete", id)
    }

    const renderItem = ({ item }) => <OrderItems item={item} onDelete={onDelete} onShowOrders={onShowOrders}/>
    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
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
        alignItems: "center",
    }
})
