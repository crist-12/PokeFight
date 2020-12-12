import React, { useEffect, createContext, useState } from 'react';
import {database} from '../components/database'

export const PokeContext = createContext({});

export const PokeContextProvider = props => {
  // Initial values are obtained from the props
  const {
    pokes: initialPokes,
    children
  } = props;

  // Use State to store the values
  const [pokes, setPokes] = useState(initialPokes);

console.log("Estoy en PokeContext")

  useEffect(() => {
    refreshPokemons()
  }, [] )


  const refreshPokemons = () =>  {
     database.getPokemons(setPokes)
  }

  console.log("Pokes en Context es: "+pokes)

  // Make the context object:
  const pokesContext = {
    pokes
  };



  // pass the value in provider and return
  return <PokeContext.Provider value={pokesContext}>{children}</PokeContext.Provider>;
};
