import React from 'react'

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const getUsers = (setUserFunc) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'select * from users',
        [],
        (_, { rows: { _array } }) => {
          setUserFunc(_array)
        }
      );
    },
    (t, error) => { console.log("db error load users"); console.log(error) },
    (_t, _success) => { console.log("loaded users")}
  );
}

const getAtaques = (setAttackFunc) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'select * from Ataques',
        [],
        (_, { rows: { _array } }) => {
          setAttackFunc(_array)
        }
      );
    },
    (t, error) => { console.log("db error load ataques"); console.log(error) },
    (_t, _success) => { console.log("loaded attacks")}
  );
}

const getPokemons = (setPokeFunc) => {
    db.transaction(
      tx => {
        tx.executeSql(
          'select * from Pokemons',
          [],
          (_, { rows: { _array } }) => {
            setPokeFunc(_array)
            console.log(_array)
          }
        ); 
      },
      (t, error) => { console.log("Error de carga de Pokemons"); console.log(error) },
      (_t, _success) => { console.log("Pokemons cargados")}
    );
  }

const insertUser = (userName, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'insert into users (name) values (?)', [userName] );
    },
    (t, error) => { console.log("db error insertUser"); console.log(error);},
    (t, success) => { successFunc() }
  )
}

const dropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'drop table users',
        [],
        (_, result) => { resolve(result) },
        (_, error) => { console.log("error dropping users table"); reject(error)
        }
      )
    })
  })
}

const dropAtaqueTable = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'drop table Ataques',
        [],
        (_, result) => { resolve(result) },
        (_, error) => { console.log("error dropping ataques table"); reject(error)
        }
      )
    })
  })
}

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(
          'create table if not exists users (id integer primary key not null, name text);'
        );
      },
      (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
      (_, success) => { resolve(success)}
    )
  })
}

const setupPokeTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
          tx.executeSql(
            "create table if not exists Pokemons (id integer primary key not null, nombre text,tipo text,descripcion text, ataque integer,defensa integer, velocidad integer, salud integer, habilidad integer, altura integer, peso integer)",
            []
          );
        },
        (_, error) => { console.log("db error creating tables pokemon"); console.log(error); reject(error) },
        (_, success) => { resolve(success)}
      )
    })
  }

  const setupAtaqueTable = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
          tx.executeSql(
            "CREATE TABLE if not exists Ataques (id INTEGER PRIMARY KEY NOT NULL, Ataque1 TEXT, Valor1 INTEGER, Ataque2 TEXT, Valor2 INTEGER, Ataque3 TEXT, Valor3 INTEGER, Ataque4 TEXT, Valor4 INTEGER)",
            []
          );
        },
        (_, error) => { console.log("db error creating ataques pokemon"); console.log(error); reject(error) },
        (_, success) => { 
          resolve(success)
          console.log("Tabla de ataques creada exitosamente")
        }
      )
    })
  }

  const insertPokemons = async (successFunc) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into Pokemons (nombre,tipo,descripcion,ataque,defensa,velocidad,salud,habilidad,altura,peso)"+
        " VALUES ('Pikachu', 'Eléctrico', 'Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.',155,155,155,155,'Estática',40,0.6),"+
        " ('Bulbasaur', 'Planta', 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',155,155,155,155,'Estática',40,0.6),"+
        " ('Butterfree', 'Volador', 'Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas.',155,155,155,155,'Estática',40,0.6),"+
        " ('Squirtle', 'Agua', 'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.',155,155,155,155,'Estática',40,0.6),"+
        " ('Riolu', 'Lucha', 'Tiene una gran resistencia que le permite correr mucho, lo que hace difícil seguirle el ritmo.',155,155,155,155,'Estática',40,0.6),"+
        " ('Eevee', 'Normal', 'Es capaz de alterar la composición de su cuerpo para adaptarse al entorno.',155,155,155,155,'Estática',40,0.6)"
        );
      },
      (_t, error) => {
        console.log("Error al insertar al pokemon");
        console.log(error);
      },
      (_t, _success) => {
        successFunc;
        console.log(successFunc)
        console.log("se insertaron los datos correctamente los pokemones")
      }
    );
  };

  const insertAtaques = async (successFunc) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into Ataques (Ataque1, Valor1, Ataque2, Valor2, Ataque3, Valor3, Ataque4, Valor4)"+
        " VALUES  ('Impactrueno', 40, 'Rayo', 90, 'Ataque Rápido', 40, 'Amago', 30),"+
        " ('Placaje', 40, 'Látigo Cepa', 45, 'Hoja Afilada', 55, 'Doble Filo', 120),"+
        " ('Tornado', 40, 'Psicorrayo', 65, 'Viento Plata', 60, 'Zumbido', 90),"+
        " ('Pistola Agua', 40, 'Burbuja', 40, 'Mordisco', 60, 'Hidropulso', 60),"+
        " ('Amago', 30, 'Palmeo', 60, 'Ataque rápido', 40, 'Pulso áureo', 70),"+
        " ('Placaje', 40, 'Rapidez', 60, 'Derribo', 90, 'Antojo', 60)"
        );
      },
      (_t, error) => {
        console.log("Error al insertar ataques");
        console.log(error);
      },
      (_t, _success) => {
        successFunc;
        console.log(successFunc)
        console.log("se insertaron los datos correctamente los ataques")
      }
    );
  };

const setupUsersAsync = async () => {
  return new Promise((resolve, _reject) => {
    db.transaction( tx => {
        tx.executeSql( 'insert into users (id, name) values (?,?)', [1, "john"] );
      },
      (t, error) => { console.log("db error insertUser"); console.log(error); resolve() },
      (t, success) => { resolve(success)}
    )
  })
}

const dropPokeTable = async () => {
    return new Promise((resolve, _reject) => {
      db.transaction( tx => {
          tx.executeSql( 'drop table Pokemons' );
        },
        (t, error) => { console.log("Error al tratar de borrar tabla de Pokemons"); console.log(error); resolve() },
        (t, success) => { 
          console.log("Borré la tabla de ataques Pokemon")
          resolve(success)}
      )
    })
  }

export const database = {
  getUsers,
  insertUser,
  setupDatabaseAsync,
  setupUsersAsync,
  dropDatabaseTablesAsync,
  insertPokemons,
  setupPokeTableAsync,
  dropPokeTable,
  getPokemons,
  setupAtaqueTable,
  insertAtaques,
  getAtaques,
  dropAtaqueTable
}