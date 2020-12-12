let pokemon;
let contrincante;
let imagen;
let imagen_cont;
let ataque1;
let ataque2;

export const setPersonaje=(pokeObject)=>{
    pokemon = pokeObject;
}

export const getPersonaje=()=>{
    return pokemon;
}

export const setContrincante=(contrin)=>{
    contrincante = contrin;
}

export const getContrincante=()=>{
    return contrincante;
}

export const setImagen=(image)=>{
    imagen = image;
}

export const getImagen=()=>{
    return imagen;
}

export const setImagenContrincante=(con)=>{
    imagen_cont = con;
}

export const getImagenContrincante=()=>{
    return imagen_cont;
}

export const setAtaques=(attack1)=>{
    ataque1 = attack1;
}

export const setAtaquesOponente=(attack2)=>{
    ataque2 = attack2;
}

export const getAtaques=()=>{
    return ataque1;
}

export const getAtaquesOponentes=()=>{
    return ataque2;
}

