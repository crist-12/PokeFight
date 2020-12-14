import React, {useEffect} from 'react';

import {database} from '../components/database'

export default function useDatabase() {
  const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);


  useEffect(() => {
    async function loadDataAsync() {
      try {
      //  await database.dropAtaqueTable()
        await database.dropPokeTable()
        await database.setupDatabaseAsync()
        await database.setupUsersAsync()
      //  await database.insertUser()
        await database.setupPokeTableAsync()
        await database.setupBatallaTable()
        await database.setupAtaqueTable()
        await database.insertPokemons()
        await database.insertAtaques()
        console.log("TODAS LAS TABLAS CREADAS EXITOSAMENTE")
        setDBLoadingComplete(true);

      } catch (e) {
          console.log("No pude entrar :c")
          
        console.warn(e);
      }
    }
    loadDataAsync();
  }, []);

  return isDBLoadingComplete;
}