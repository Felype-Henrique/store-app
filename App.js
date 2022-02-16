import React from 'react'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/screen/Home'
import MyCard from './components/screen/MyCart'
import ProductInfo from './components/screen/ProductInfo'

const App = () => {

  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="MyCard" component={MyCard}/>
        <Stack.Screen name="ProductInfo" component={ProductInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
