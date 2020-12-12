import React, { useEffect, createContext, useState } from 'react';
import {database} from '../components/database'

export const AtaqueContext = createContext({});

export const AtaqueContextProvider = props => {
  // Initial values are obtained from the props
  const {
    ataque: initialAtaques,
    children
  } = props;

  // Use State to store the values
  const [ataques, setAtaques] = useState(initialAtaques);

console.log("Estoy en PokeContext")

  useEffect(() => {
    refreshAtaques()
  }, [] )


  const refreshAtaques = () =>  {
     database.getAtaques(setAtaques)
  }

  console.log("Pokes en Context es: "+ataques)

  // Make the context object:
  const ataquesContext = {
    ataques
  };



  // pass the value in provider and return
  return <AtaqueContext.Provider value={ataquesContext}>{children}</AtaqueContext.Provider>;
};
