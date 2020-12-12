import React, {useEffect} from 'react';

import {database} from '../components/database'

export default function useDatabase() {
  const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);


  useEffect(() => {
    async function loadDataAsync() {
      try {
       // await database.dropDatabaseTablesAsync()
        await database.setupDatabaseAsync()
        
        await database.dropPokeTable()
        await database.dropAtaqueTable()
        await database.setupUsersAsync()
        await database.setupPokeTableAsync()
        await database.setupAtaqueTable()
        await database.insertPokemons()
        await database.insertAtaques()

        setDBLoadingComplete(true);
      } catch (e) {
          console.log("No pude entrar :c")
          setDBLoadingComplete(true);
        console.warn(e);
      }
    }

    loadDataAsync();
  }, []);

  return isDBLoadingComplete;
}