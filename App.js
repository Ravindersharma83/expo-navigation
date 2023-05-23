import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreens(){
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName='Home'>
      <Drawer.Screen name="Home" component={HomeScreen}  />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Details" component={DetailScreen} />
    </Drawer.Navigator>
  )
}

function App() {
  const [signIn,setSignIn] = React.useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          signIn ? (
            <>
            <Stack.Screen name="Home" component={DrawerScreens} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
            </>
          )
        }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;