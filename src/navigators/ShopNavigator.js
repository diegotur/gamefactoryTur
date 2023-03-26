import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryGameScreen from '../screens/CategoryGameScreen'
import GameDetailScreen from '../screens/GameDetailScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'black' : COLORS.primary,
          headerTitleStyle: {
            fontFamily: 'OpenSans_700Bold',
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={CategoriesScreen}
          options={{
            title: 'Game Factory'
          }}
        />
        <Stack.Screen
          name="Juegos"
          component={CategoryGameScreen}
          options={({ route }) => ({ title: route.params.categoryName })}

        />
        <Stack.Screen
          name="Detalle"
          component={GameDetailScreen}
          options={({ route }) => ({ title: route.params.title })} 
          />
      </Stack.Navigator>
  )
}

export default ShopNavigator

