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

  const addNewBatalla = batallaData => {
    return database.insertBattle(batallaData, refreshBatallas)
  };

  const refreshBatallas = () =>  {
    return database.getBatallas(setBatallas)
  }

 

  // Make the context object:
  const batallasContext = {
    batallas,
    addNewBatalla
  };



  // pass the value in provider and return
  return <BatallasContext.Provider value={batallasContext}>{children}</BatallasContext.Provider>;
};
