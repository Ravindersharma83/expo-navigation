import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const DetailScreen = ({route,navigation}) => {
    const {itemId,otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
})