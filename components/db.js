import React from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("basePokemons.db");

// funcionalidades
//selecciones de los datos de las  tablas
const getPokemons = (setPokemonsFunc) =>{
 db.transaction((tx)=>{
     tx.executeSql("select * from Pokemons",
     [],
     (_, { rows: { _array } }) => {
        setPokemonsFunc(_array);
        },
        (_t, error) => {
            console.log("Error al momento de obtener los datos de los pokemons");
            console.log(error);
          },
          (_t, _success) => {
            console.log("Informacion de los pokemons obtenidas");
          }
     );
 });
};

const insertPokemons = (nombre,tipo,descripcion,ataque,defensa,velocidad,salud,habilidad,altura,peso, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into Pokemons (nombre,tipo,descripcion,ataque,defensa,velocidad,salud,habilidad,altura,peso) values (?,?,?,?,?,?,?,?,?,?)", [nombre,tipo,descripcion,ataque,defensa,velocidad,salud,habilidad,altura,peso]);
    },
    (_t, error) => {
      console.log("Error al insertar al Usuario");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

const getAtaques = (setPokemonsAtackFunc) =>{
    db.transaction((tx)=>{
        tx.executeSql("select * from Ataques",
        [],
        (_, { rows: { _array } }) => {
           setPokemonsAtackFunc(_array);
           },
           (_t, error) => {
               console.log("Error al momento de obtener los datos de los ataques de los pokemons");
               console.log(error);
             },
             (_t, _success) => {
               console.log("Informacion de los ataques pokemons obtenidas");
             }
        );
    });
   };
   


   
   const getUsuarios = (setUserFunc) =>{
    db.transaction((tx)=>{
        tx.executeSql("select * from Usuarios",
        [],
        (_, { rows: { _array } }) => {
           setUserFunc(_array);
           },
           (_t, error) => {
               console.log("Error al momento de obtener los datos de usuarios");
               console.log(error);
             },
             (_t, _success) => {
               console.log("Informacion de los datos de usuarios obtenidos");
             }
        );
    });
   };
//
const insertUsuarios = (Usuario, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into Usuarios (id,userName) values (?)", [Usuario]);
    },
    (_t, error) => {
      console.log("Error al insertar al Usuario");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

const updateUsuarios = (Value1, Value2) =>{
    db.transaction((tx)=>{
        tx.executeSql("update Usuarios set userName = ? where id= ? ",
        [Value1,Value2],
           (_t, error) => {
               console.log("Error al momento de obtener los datos de usuarios");
               console.log(error);
             },
             (_t, _success) => {
               console.log("Informacion de los datos de usuarios obtenidos");
             }
        );
    });
   };

   const deleteUsuarios = (Value1) =>{
    db.transaction((tx)=>{
        tx.executeSql("delete from Usuarios where = ? ",
        [Value1],
           (_t, error) => {
               console.log("Error al momento de eliminar los datos de usuarios");
               console.log(error);
             },
             (_t, _success) => {
               console.log("Informacion de los datos de usuarios eleminados");
             }
        );
    });
   };



// creacion de la tabla de pokemons

const setupPokemonsasync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists Pokemons (id integer primary key not null, nombre text,tipo text,descripcion text, ataque integer,defensa integer, velocidad integer, salud integer, habilidad integer, altura integer, peso integer)"
          );
        },
        (_t, error) => {
          console.log("Error al momento de crear la table");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };
   // funcion para crear tabla de ataques
  const setupAtaquesAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists Ataques (id integer primary key not null, userName text, pokemonUsado text, pokemonContricante text, tiempo integer,saludJugador integer, saludComputador integer, puntos integer)"
          );
        },
        (_t, error) => {
          console.log("Error al momento de crear la table");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          resolve(success);
        }
      );
    });
  };

     // funcion para crear tabla de usuarios
     const setupUsuariosAsync = async () => {
        return new Promise((resolve, reject) => {
          db.transaction(
            (tx) => {
              tx.executeSql(
                "create table if not exists Usuarios (id integer primary key not null, userName text)"
              );
            },
            (_t, error) => {
              console.log("Error al momento de crear la table");
              console.log(error);
              reject(error);
            },
            (_t, success) => {
              resolve(success);
            }
          );
        });
      };
    
      export const database = {
        getAtaques,
        getPokemons,
        getUsuarios,
        insertUsuarios,
        insertPokemons,
        updateUsuarios,
        deleteUsuarios,
        setupAtaquesAsync,
        setupPokemonsasync,
        setupUsuariosAsync
      };
      