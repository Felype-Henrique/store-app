import React, {useState, useEffect} from "react";
import {View, Text} from 'react-native'
import {Items} from '../database/Database'

const ProductInfo = ({route, navigation}) => {

    const {productID} = route.params;

    const [product ,  setProduct] = useState({})

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB()
        })

        return unsubscribe;
    }, [navigation])

    const getDataFromDB = () => {
        for (let index = 0; index < Items.length; index++){
            if(Items[index].id == productID){

            }
        }
    }
    return(
        <View>
            <Text>ProductInfo</Text>
        </View>
    )
}

export default ProductInfo