import React from 'react'

import styled from 'styled-components/native'

import { StatusBar } from 'react-native'
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {PokemonsContextProvider} from './context/pokemonsContext'
import PokeBatallaScreen from './scr/screens/PokeBatallaScreen'
import PokePersonajeScreen from './scr/screens/PokePersonajeScreen'
import PokeTopScreen from './scr/screens/PokeTopScreen'
import PokeUsersScreen from './scr/screens/PokeUsersScreen'
import useDatabase from './hooks/useDataBase'

const Container = styled.SafeAreaView`
    flex: 1;
`
const Stack = createStackNavigator();

const App = ()=>{

  SplashScreen.preventAutoHideAsync();

  const isLoadingComplete = useDatabase();

  // Ocultar la pantalla de splash
  if (isLoadingComplete) SplashScreen.hideAsync();

    return(
        <Container>  
        <PokemonsContextProvider>
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
        </PokemonsContextProvider>
        </Container>
    )
}

export default App;
