import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto
export const pokeContext = createContext({});

export const NotesContextProvider = (props) => {
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

  const addNewpokemons = (notes) => {
    return database.insertPokemons(notes, refreshNotes);
  };

  // Crear el objeto de contexto
  const notesContext = {
    notes,
    addNewpokemons,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <NotesContext.Provider value={notesContext}>
      {children}
    </NotesContext.Provider>
  );
};
