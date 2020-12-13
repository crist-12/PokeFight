import React, { useEffect, createContext, useState } from 'react';
import {database} from '../components/database'

export const BatallasContext = createContext({});

export const BatallasContextProvider = props => {
  // Initial values are obtained from the props
  const {
    batallas: initialBatallas,
    children
  } = props;

  // Use State to store the values
  const [batallas, setBatallas] = useState(initialBatallas);


  useEffect(() => {
    refreshBatallas()
  }, [] )

  const addNewBatalla = (battle) => {
    return database.insertBattle(battle, refreshBatallas)
  };

  const refreshBatallas = () =>  {
     database.getBatallas(setBatallas)
  }

  const deleteBatallas = () => {
    database.dropBatallasTable()
  }

 console.log("El valor de batallas es: ");
 console.log(batallas);

  // Make the context object:
  const batallasContext = {
    batallas,
    addNewBatalla,
    deleteBatallas,
    setBatallas
  };

  // pass the value in provider and return
  return <BatallasContext.Provider value={batallasContext}>{children}</BatallasContext.Provider>;
};
