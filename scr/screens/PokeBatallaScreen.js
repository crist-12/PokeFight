import React, { useContext, useState,useEffect } from 'react'

import styled from 'styled-components/native'

import { Audio } from 'expo-av'
import { FontAwesome } from '@expo/vector-icons'


import { PokeContext } from '../context/PokeContext'
import { AtaqueContext, AtaquesContext } from '../context/AtaquesContext'

import { setContrincante, setPersonaje, setImagen, setImagenContrincante, setAtaques, setAtaquesOponente } from '../../data_store'
import { BatallasContext } from '../context/BatallasContext'
import {UsersContext} from '../context/UsersContext'


// ----- STYLED SECTION ----
const Icon = styled.Image`
    width: 25px;
    height: 25px;
`

const Container = styled.View`
    flex: 1;
`
const SuperiorRow = styled.View`
    width: 100%;
    height: 40px;
    flex-direction: row;
    background: #c4c4c4
    justify-content: space-between;
    display: flex;
`

const GrayRow = styled.View`
    flex: 3;
    background: #c4c4c4;
    height: 40px;
    justify-content: flex-start;
    flex-direction: row;
    width: 50%
    margin-right: 6px;
`


const RedRow = styled.View`
    flex: 3;
    height: 40px;
    background: rgb(250, 95, 95);
    width: 50%
    margin-bottom: 5px;
    flex-direction: row;
`
const MiddleBox = styled.View`
    justify-content: center;
    align-items: center;
    width: 40px;
`

const Triangle = styled.View`
    width: 0px;
    height: 0px;
    border-bottom-width: 40px; 
    border-bottom-color: solid rgb(196, 196, 196);
    border-right-width: 40px;
    border-right-color: solid rgb(250, 95, 95);
`
const UserText = styled.Text`
    margin-top: 10px;
    margin-left: 10px;
    font-size: 16px;
    margin-right: 20px;
`
const Pokeball = styled.Image`
    margin-top: 5px;
    height: 30px;
    width: 30px;
    margin-left: 10px;
`
const ButtonGroup = styled.View`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    margin-bottom: 5px;
`

const ButtonTop = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: white;
    margin-top: 5px;
    align-items: flex-end;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
`

const PokeGrid = styled.View`
    flex : 1;
    display: flex;
    flex-direction: row;
`

const PokeArray = styled.View`
    flex: 3;
    width: 55%
`

const PokeCardGroup = styled.View`
    flex: 2;
    width: 45%;
    padding: 20px 15px;
`

const Title = styled.View`
    background: rgb(250, 95, 95);
    align-items: flex-end;
    justify-content: space-between;
    padding: 5px;
    flex-direction: row;
`

const PokeRow = styled.View`
    flex-direction: row;
`
const Group = styled.View`
    align-items: center;
`

const PokeName = styled.Text`
    font-size: 14px;
`

const PokeCircle = styled.TouchableOpacity`
    width: 80px;
    margin: 20px 20px;
    height: 80px;
    border-radius: 40px;
    background-color: #c4c4c4;
    justify-content: center;
    align-items: center;
`
const PokeImage = styled.Image`
    height: 60px;
    width: 60px;
    resize-mode: stretch;
`
const Card = styled.View`
     background: #C1E6F6
`

//Pikachu
const Type0 = styled.View` 
    height: 20px;
    width: 70px;
    border-radius: 10px;
    background: yellow;
    justify-content: center;
    align-items: center;
    border: 1px;
    margin: 8px;
`

//Bulbasaur
const Type1 = styled.View`
    height: 20px;
    width: 70px;
    border-radius: 10px;
    background: #92da5f;
    justify-content: center;
    align-items: center;
    border: 1px;
    margin: 8px;
`

//Butterfree
const Type2 = styled.View`
    height: 20px;
    width: 70px;
    border-radius: 10px;
    background: #dbe3d6;
    justify-content: center;
    align-items: center;
    border: 1px;
    margin: 8px;
`

//Squirtle
const Type3 = styled.View`
    height: 20px;
    width: 70px;
    border-radius: 10px;
    background: #46cfca;
    justify-content: center;
    align-items: center;
    border: 1px;
    margin: 8px;
`

//Riolu
const Type4 = styled.View`
    height: 20px;
    width: 70px;
    border-radius: 10px;
    background: #ec9f49;
    justify-content: center;
    align-items: center;
    border: 1px;
    margin: 8px;
`

//Eevee
const Type5 = styled.View`
    height: 20px;
    width: 70px;
    border-radius: 10px;
    background: #cb96fa;
    justify-content: center;
    align-items: center;
    border: 1px;
    margin: 8px;
`

const Name = styled.Text`
    font-weight: bold;
    font-size: 16px;
`

const Info = styled.Text`
    font-size: 14px;
`
const Description = styled.Text`
    font-size: 12px;
    text-align: justify;
`

const CardDivider = styled.View`
    flex: 1;
    flex-direction: row;
    background: #C1E6F6
`

const InfoDivider = styled.View`
    flex: 1;
    padding: 10px;
    background: #C1E6F6
`

const ImageDivider = styled.View`
    flex: 1;
    background: #C1E6F6
`

const StatsBox = styled.View`
    flex: 1;
    margin-top: 10px;
    flex-direction: row;
`

const SBox = styled.View`
    flex: 2;
`
const SValue = styled.View`
    flex: 1;
`

const StatText = styled.Text`
    font-weight: bold;
`
const ImageBox = styled.View`
    justify-content: center;
    align-items: center;
`
const ImageCard = styled.Image`
    height: 80px;
    width: 80px;
    resize-mode: stretch;
`

const AbilityBox = styled.View`
    flex: 1;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`

const ABox = styled.View`
    flex: 1;
`
const soundObject = new Audio.Sound();

const PokeBatalla = ({navigation})=>{
    const usersContext = useContext(UsersContext);
    const[usuario, setUsuario]=useState("Usuario")
    const {users, addNewUser, modificarUsers}= usersContext;
    let aux_user;

    if(users!==undefined){
    console.log("El usuario es "+users);
    {users.map((user) => (
       aux_user = user.name
      ))}
    //  setUsuario(aux_user)
    }else{
        console.log("USERS VIENE UNDEFINED")
    }

    

    const [id, setId]=useState(0);
    let PokeObject = {
        "nombre": "Pikachu",
        "altura": 0.4,
        "ataque": 155,
        "tipo": "Eléctrico",
        "defensa": 155,
        "velocidad": 155,
        "salud": 155,
        "descripcion": "Pikachu",
        "peso": 60,
        "id": 0,
        "habilidad": "Estática"
    }



    
   // const pokemonsContext = useContext (PokemonsContext);
    // const { addNewpokemons, refreshPokemons,Pokemons} = pokemonsContext;
    const pokesContext = useContext(PokeContext);
    const {pokes} = pokesContext;

    const ataquesContext = useContext(AtaqueContext);
    const {ataques} = ataquesContext;



    const [play, setPlay] = useState(true);
    let value = play;
    var tipo;
    var imagen = <ImageCard source={require('../img/Pikachu.png')}/>
    let parametro = id;



    const mostrarPoke=(parametro)=>{
        
        switch(parametro){
            case 0:
                tipo = <Type0><Info>Eléctrico</Info></Type0>
                imagen = <ImageCard source={require('../img/Pikachu.png')}/>
                break;
            case 1:
                tipo = <Type1><Info>Planta</Info></Type1>
                imagen = <ImageCard source={require('../img/Bulbasaur.png')}/>
                break;
            case 2:
                tipo = <Type2><Info>Volador</Info></Type2>
                imagen = <ImageCard source={require('../img/Butterfree.png')}/>
                break;
            case 3:
                tipo = <Type3><Info>Agua</Info></Type3>
                imagen = <ImageCard source={require('../img/Squirtle.png')}/>
                break;
            case 4:
                    tipo = <Type4><Info>Lucha</Info></Type4>
                    imagen = <ImageCard source={require('../img/Riolu.png')}/>
                    break;  
            case 5:
                    tipo = <Type5><Info>Normal</Info></Type5>
                    imagen = <ImageCard source={require('../img/Eevee.png')}/>
                    break;  
        }

        try{
            PokeObject = pokes[parametro];
            console.log(PokeObject);
        }catch(e){
            console.log("Ocurrió un error de asignación de objeto.")
        }
        
    }

    mostrarPoke(parametro); //Cambia de Pokemon cada vez que selecciono uno diferente
    

    //Función random que obtiene el pokemon para pelear
    const obtenerContrincante=()=>{
        return Math.round(Math.random()*(5));
    }

   // Función para reproducir música.
    const playBackground= async()=>{
        try{
              await soundObject.unloadAsync()
              await soundObject.loadAsync(require('../audios/background.mp3'));
              soundObject.setIsLoopingAsync(true);
              await soundObject.replayAsync();
        }catch(error){
            console.log("Ha ocurrido un error al tratar de cargar el archivo. "+error);
        }
    }
    
useEffect(()=>{
    playBackground();
},[])

    if(value){
        playBackground();
    }

    const Navegar=()=>{
        var oponente;
        var index = obtenerContrincante();
        setPersonaje(PokeObject);
        setContrincante(pokes[index]);
        setImagen(imagen);
        
        switch(index){
            case 0:
                oponente = <ImageCard source={require('../img/Pikachu.png')}/>
                break;
            case 1:
                oponente = <ImageCard source={require('../img/Bulbasaur.png')}/>
                break;
            case 2:
                oponente = <ImageCard source={require('../img/Butterfree.png')}/>
                break;
            case 3:
                oponente = <ImageCard source={require('../img/Squirtle.png')}/>
                break;
            case 4:
                oponente = <ImageCard source={require('../img/Riolu.png')}/>
                break;
            case 5:
                oponente = <ImageCard source={require('../img/Eevee.png')}/>
                break;
        }
        setAtaques(ataques[parametro]);
        setImagenContrincante(oponente)
        setAtaquesOponente(ataques[index]);
        navigation.navigate("PokePersonajeScreen")
    }
    
   const setChangeAudio=async()=>{
       value = !play;
       setPlay(value)
       if(value){
        await soundObject.replayAsync();
       }else{
        await soundObject.unloadAsync();
        await soundObject.pauseAsync();
       }
    } 

    return(
        <Container>
           <SuperiorRow>
                <GrayRow>
                    <Pokeball 
                    source={require('../img/pokeball.png')}
                    />
                    <UserText>¡Bienvenido(a), {aux_user}!</UserText>
                </GrayRow>
            <MiddleBox>
            <Triangle></Triangle>
            </MiddleBox>
                <RedRow>
                    <ButtonGroup>
                    <ButtonTop onPress={()=>setChangeAudio()}>
                        {play?
                        <FontAwesome
                            name="volume-up"
                            size={18}
                            color="black"
                            />:
                             <FontAwesome
                            name="volume-off"
                            size={18}
                            color="black"
                            />
                        }
                        </ButtonTop>
                        
                        <ButtonTop onPress={()=>navigation.navigate("PokeUsersScreen")}>
                            <FontAwesome
                            name="plus"
                            size={18}
                            color="black"/>
                        </ButtonTop>
                        <ButtonTop onPress={()=>navigation.navigate("PokeTopScreen")}>
                        <FontAwesome
                            name="trophy"
                            size={18}
                            color="black"/>
                        </ButtonTop>
                    </ButtonGroup>
                </RedRow>
           </SuperiorRow>
           <PokeGrid>
                <PokeArray>
                    <PokeRow>
                        <UserText>Escoge tu compañero de batalla:</UserText>
                    </PokeRow>
                    <PokeRow>
                        <Group>
                            <PokeCircle onPress={()=>setId(0)}>
                                <PokeImage
                                source={require('../img/Pikachu.png')}
                                />
                            </PokeCircle>
                            <PokeName>Pikachu</PokeName>
                        </Group>
                        <Group>
                            <PokeCircle onPress={()=>setId(1)}>
                            <PokeImage
                                source={require('../img/Bulbasaur.png')}
                                />
                            </PokeCircle>
                            <PokeName>Bulbasaur</PokeName>
                        </Group>
                        <Group>
                            <PokeCircle onPress={()=>setId(2)}>
                            <PokeImage
                                source={require('../img/Butterfree.png')}
                                />
                            </PokeCircle>
                            <PokeName>Butterfree</PokeName>
                        </Group>
                    </PokeRow>
                    <PokeRow>
                    <Group>
                            <PokeCircle onPress={()=>setId(3)}>
                            <PokeImage
                                source={require('../img/Squirtle.png')}
                                />
                            </PokeCircle>
                            <PokeName>Squirtle</PokeName>
                        </Group>
                    <Group>
                            <PokeCircle onPress={()=>setId(4)}>
                            <PokeImage
                                source={require('../img/Riolu.png')}
                                />
                            </PokeCircle>
                            <PokeName>Riolu</PokeName>
                        </Group>
                        <Group>
                            <PokeCircle onPress={()=>setId(5)}>
                            <PokeImage
                                source={require('../img/Eevee.png')}
                                />
                            </PokeCircle>
                            <PokeName>Eevee</PokeName>
                        </Group>
                    </PokeRow>
                </PokeArray>
                <PokeCardGroup>
            <Title>
                <Name>{PokeObject.nombre}</Name>
                <ButtonTop onPress={()=>Navegar()} >
                <Icon
                    source={require('../img/fencing2.png')}/>
                </ButtonTop>
                </Title>

            <Card>
            {tipo}
            </Card>
            <CardDivider>
                <InfoDivider>
                <Description>
                    {PokeObject.descripcion}
                </Description>
                <StatsBox>
                    <SBox>
                        <StatText>PS</StatText>
                    </SBox>
                    <SValue>
                        <Info>{PokeObject.salud}</Info>
                    </SValue>
                </StatsBox>
                <StatsBox>
                    <SBox>
                        <StatText>Ataque</StatText>
                    </SBox>
                    <SValue>
                        <Info>{PokeObject.ataque}</Info>
                    </SValue>
                </StatsBox>
                <StatsBox>
                    <SBox>
                        <StatText>Defensa</StatText>
                    </SBox>
                    <SValue>
                        <Info>{PokeObject.defensa}</Info>
                    </SValue>
                </StatsBox>
                <StatsBox>
                    <SBox>
                        <StatText>Velocidad</StatText>
                    </SBox>
                    <SValue>
                        <Info>{PokeObject.velocidad}</Info>
                    </SValue>
                </StatsBox>
                </InfoDivider>
                <ImageDivider>
                <ImageBox>
                {imagen}
                </ImageBox>
                <AbilityBox>
                    <ABox>
                        <StatText>Habilidad</StatText>
                    </ABox>
                    <ABox>
                        <Info>{PokeObject.habilidad}</Info>
                    </ABox>
                </AbilityBox>
                <AbilityBox>
                <ABox>
                        <StatText>Altura y peso</StatText>
                    </ABox>
                    <ABox>
                        <Info>{PokeObject.altura} m  {PokeObject.peso} kg</Info>
                    </ABox>
                </AbilityBox>
                </ImageDivider>
            </CardDivider>
                </PokeCardGroup>
           </PokeGrid>
        </Container>
    )
}

export default PokeBatalla;
/*<Card>
                <Info>
                    Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.
                </Info>
                </Card> */