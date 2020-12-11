import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto
export const PokemonsContext = createContext({});

export const pokemonsContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { Pokemons: initialNotes, children } = props;

  // Almacenar los valores en el estado
  const [Pokemons, setPokemons] = useState(initialNotes);

  // Cargar u obtener las notas
  useEffect(() => {
    refreshPokemons();
  }, []);

  const refreshPokemons = () => {
    return database.getPokemons(setPokemons);
  };

  const addNewpokemons = (pokemon) => {
    return database.insertPokemons(pokemon, refreshNotes);
  };

  // Crear el objeto de contexto
  const pokemonsContext = {
    Pokemons,
    addNewpokemons,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <PokeContext.Provider value={pokemonsContext}>
      {children}
    </PokeContext.Provider>
  );
};
