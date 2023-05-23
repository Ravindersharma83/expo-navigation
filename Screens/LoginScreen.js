import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title='Go To Dashboard' onPress={()=>navigation.replace('Home')}/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})