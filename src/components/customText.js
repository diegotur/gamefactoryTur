import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomText = ({styleText = {fontFamily: "anotherFont"}, styleView}) => {
  
    return (
    <View style = {flatten}>
      <Text style = {(styles.defaultText, styleText)}>customText</Text>
    </View>
  )
}

export default CustomText

const styles = StyleSheet.create({
    defaultView: {
        backgroundColor: "red",
    },
    defaultText:{
        fontFamily: "openSans_700Bold"
    }

})