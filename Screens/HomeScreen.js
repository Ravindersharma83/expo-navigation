import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Page Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details',{
            itemId: 86,
            otherParam: 'anything information you want pass here',
          })}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})