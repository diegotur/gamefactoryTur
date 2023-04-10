import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import OrderItems from '../components/OrderItems'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '../store/actions/orders.action'



const OrdersScreen = () => {
    
    const orders = useSelector(state=> state.orders.list)
    
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getOrders())
    }, [])
    
    const onHandleDeleteOrder = (id)=>{
        console.log('delete order')
        dispatch(deleteOrder(id))
    }

    const renderOrdersItem = ({ item }) => <OrderItems item={item} onDelete={onHandleDeleteOrder} />
    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderOrdersItem}
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
