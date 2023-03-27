import { Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrdersScreen from '../screens/OrdersScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'black' : COLORS.primary,
                headerTitleStyle: {
                    fontFamily: 'OpenSans_700Bold'
                }
            }}
        >
            <Stack.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    title: 'Órdenes'
                }}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator