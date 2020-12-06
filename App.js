import React from 'react'

import styled from 'styled-components/native'

import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import PokeBatallaScreen from './scr/screens/PokeBatallaScreen'
import PokePersonajeScreen from './scr/screens/PokePersonajeScreen'
import PokeTopScreen from './scr/screens/PokeTopScreen'
import PokeUsersScreen from './scr/screens/PokeUsersScreen'

const Container = styled.SafeAreaView`
    flex: 1;
`
const Stack = createStackNavigator();

const App = ()=>{
    return(
        <Container>  
          <StatusBar
        barStyle = "dark-content" hidden={true} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="PokeBatallaScreen" headerMode="none">
            <Stack.Screen name="PokeBatallaScreen" component={PokeBatallaScreen}/>
            <Stack.Screen name="PokePersonajeScreen" component={PokePersonajeScreen}/>
            <Stack.Screen name="PokeUsersScreen" component={PokeUsersScreen}/>
            <Stack.Screen name="PokeTopScreen" component={PokeTopScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        </Container>
    )
}

export default App;
