
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';

import useDatabase from './scr/hooks/useDatabase'


import {UsersContextProvider} from './scr/context/UsersContext'
import {PokeContextProvider} from './scr/context/PokeContext'
import {AtaqueContextProvider} from './scr/context/AtaquesContext'
import {BatallasContextProvider} from './scr/context/BatallasContext'

import PokeBatallaScreen from './scr/screens/PokeBatallaScreen'
import PokePersonajeScreen from './scr/screens/PokePersonajeScreen'
import PokeTopScreen from './scr/screens/PokeTopScreen'
import PokeUsersScreen from './scr/screens/PokeUsersScreen'

const Stack = createStackNavigator();

export default function App(props) {
  //SplashScreen.preventAutoHideAsync();

  const isDBLoadingComplete = useDatabase();
  console.log("El valor de la variable es "+isDBLoadingComplete)
  if (isDBLoadingComplete) {
  //  SplashScreen.hideAsync();

    return (
      <View style={styles.container}>
         <StatusBar
        barStyle = "dark-content" hidden={true} />
        <UsersContextProvider>
        <PokeContextProvider>
        <AtaqueContextProvider>
        <BatallasContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="PokeBatallaScreen" headerMode="none">
            <Stack.Screen name="PokeBatallaScreen" component={PokeBatallaScreen}/>
            <Stack.Screen name="PokePersonajeScreen" component={PokePersonajeScreen}/>
            <Stack.Screen name="PokeUsersScreen" component={PokeUsersScreen}/>
            <Stack.Screen name="PokeTopScreen" component={PokeTopScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        </BatallasContextProvider>
        </AtaqueContextProvider>
        </PokeContextProvider>
        </UsersContextProvider>
      </View>
    );
  } else {
    console.log("Algo salió mal")
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

/*
import React from 'react';
import { View } from 'react-native';
import {UsersContextProvider} from './scr/context/UsersContext'
import * as SplashScreen from 'expo-splash-screen';

import useDatabase from './scr/hooks/useDatabase'


export default function App(props) {
  SplashScreen.preventAutoHideAsync(); //don't let the splash screen hide

  const isDBLoadingComplete = useDatabase();

  if (isDBLoadingComplete) {
    SplashScreen.hideAsync();

    return (
      <UsersContextProvider>
      <View>
        ...Render the app stuff here...
      </View>
      </UsersContextProvider>
    );
  } else {
    return null;
  }
}*/


/*import React from 'react'

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

export default App; */
