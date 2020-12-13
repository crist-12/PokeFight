import React, { useEffect, useContext } from 'react'

import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { setContrincante, setPersonaje, getContrincante, getPersonaje, getImagen, getImagenContrincante, getAtaques, getAtaquesOponentes } from '../../data_store'
import { useState } from 'react/cjs/react.development'

import {ProgressBarAndroid, Alert} from 'react-native'

import {BatallasContext} from '../context/BatallasContext'

const Container = styled.View`
    flex: 1;
    background: white;
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

const MiddleBox = styled.View`
    justify-content: center;
    align-items: center;
    width: 40px;
`
const Pokeball = styled.Image`
    margin-top: 5px;
    height: 30px;
    width: 30px;
    margin-left: 10px;
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
const FighterRow = styled.View`
    margin-top: 40px;
    width: 100%;
    height: 30px;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
`

const Fighter1 = styled.View`

`
const Triangle1 = styled.View`
    width: 0px;
    height: 0px;
    border-bottom-width: 30px; 
    border-bottom-color: solid rgb(196, 196, 196);
    border-right-width: 30px;
    border-right-color: solid rgb(255, 255, 255);
`
const Triangle2 = styled.View`
    width: 0px;
    height: 0px;
    border-bottom-width: 30px; 
    border-bottom-color: solid rgb(196, 196, 196);
    border-left-width: 30px;
    border-left-color: solid rgb(255, 255, 255);
`
const FightBox = styled.View`
    display: flex;
    flex-direction:row;
    width: 30%;
    background: #c4c4c4
    justify-content: space-between;
    align-items: center;
`

const PokeNames = styled.Text`
    margin-top: 10px;
    margin-left: 10px;
    font-size: 16px;
    margin-right: 20px;
    font-weight: bold;
`
//C1E6F6
const CenterBox = styled.View`
    display: flex;
    width: 100%;
    height: 35%;
    flex-direction: row;
    justify-content: space-between;
`

const FighterDiv = styled.View`
    width: 40%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const Statistics = styled.View`
    width: 20%;
    background: #c4c4c4;
    height: 100%;
    align-items: center;
`

const DownBar = styled.View`
    display: flex;
    width: 100%;
    background: #C1E6F6;
    height: 35%;
    flex-direction: row;
    justify-content: space-between;
`
const ButtonRow = styled.View`
    width: 100%;
    height: 50%;
    flex-direction: row;
    align-items: center;
`
const ImageCard = styled.Image`
    height: 80px;
    width: 80px;
    resize-mode: stretch;
`

const ButtonMov = styled.TouchableOpacity`
    background: #c4c4c4;
    width: 40%;
    height: 80%;
    margin: 0 14px;
    justify-content: center;
    align-items: center;
`

const StatsText = styled.Text`
    margin-top: 10px;
    margin-left: 10px;
    font-size: 14px;
    margin-right: 20px;
    font-weight: bold;
`
const StatsDesc = styled.Text`
    margin-top: 10px;
    margin-left: 10px;
    font-size: 14px;
    margin-right: 20px;
`

const MoveText = styled.Text`
    font-size: 14px;
    text-align: center;
`

const ViewCenter = styled.View`
    display: flex;
    width: 80%;
`

const PokePersonaje = ({navigation})=>{

    const batallasContext = useContext(BatallasContext);
    const {batallas, addNewBatalla}= batallasContext;

let miPokemon = getPersonaje();
let pokemonContrario = getContrincante();
let imagen1 = getImagen();
let imagen2 = getImagenContrincante();
let ataque1 = getAtaques()
let ataque2 = getAtaquesOponentes()

let damage;
let damage2;

let battle={
    MiPokemon: "",
    Contrincante: "",
    Observacion: "",
    Puntaje: 0,
    Fecha: ""
}

const [poke, setPoke]= useState('');
const [danio, setDanio]=useState('')
const [move, setMove]=useState('')
const [ps1, setps1]=useState(1);
const [ps2, setps2]=useState(1);

let salud1 = miPokemon.salud;
let salud2 = pokemonContrario.salud;
let ataqueIndex1 = miPokemon.ataque;
let ataqueIndex2 = pokemonContrario.ataque;
let defensaIndex1 = miPokemon.defensa;
let defensaIndex2 = pokemonContrario.defensa;
let fecha = new Date();

console.log();
console.log(salud1);
console.log(salud2);

useEffect(()=>{
    setps1(1);
    setps2(1);
},[])


const insertBattle = () => {
    try{
    addNewBatalla()
    console.log("He guardado la batalla "+battle);
    navigation.navigate("PokeBatallaScreen")
    }
    catch(e){
    console.log("No pude añadir la batalla")
    console.log(e);
    }
    
}

/*
console.log(ataque1)
console.log(ataque2)

console.log(miPokemon);
console.log(pokemonContrario);
*/


const calcDamageMio=(pokeAttack)=>{
    let aux;
    setPoke(miPokemon.nombre);
    let attackPower;
switch(pokeAttack){
    case 1:
        setMove(ataque1.Ataque1);
        attackPower = ataque1.Valor1;
        break;
    case 2:
        setMove(ataque1.Ataque2);
        attackPower = ataque1.Valor2;
        break;
    case 3:
        setMove(ataque1.Ataque3);
        attackPower = ataque1.Valor3;
        break;
    case 4:
        setMove(ataque1.Ataque4);
        attackPower = ataque1.Valor4;
        break;
}
damage = ((((2*100/5+2)*ataqueIndex1*attackPower/defensaIndex1)/50)+2*60)/5;

aux = ps1;
setps2(aux - (damage/salud2))
setDanio(Math.round(damage))

console.log("Daño mío: "+damage);
}

const CalcDamageOpposite=()=>{
    let opposite;
    let aux;
    let attackPower;
    opposite = Math.round(Math.random() * (4 - 1) + 1);
    setPoke(pokemonContrario.nombre);
    switch(opposite){
        case 1:
            setMove(ataque2.Ataque1);
            attackPower = ataque2.Valor1;
            break;
        case 2:
            setMove(ataque2.Ataque2);
            attackPower = ataque2.Valor2;
            break;
        case 3:
            setMove(ataque2.Ataque3);
            attackPower = ataque2.Valor3;
            break;
        case 4:
            setMove(ataque2.Ataque4);
            attackPower = ataque2.Valor4;
            break;
    }
    console.log(opposite)
    console.log(attackPower);
    damage2 = ((((2*100/5+2)*ataqueIndex2*attackPower/defensaIndex2)/50)+2*60)/5;
    console.log("Daño ajeno: "+damage2);
    aux = ps2;
    setps1(aux-(damage2/salud1))
    setDanio(Math.round(damage2));
}

const toDamage=(param)=>{
    calcDamageMio(param);
    if(ps2<=0){
    alert("Ganaste")
    navigation.navigate("PokeBatallaScreen")
    }
    setTimeout(CalcDamageOpposite, 2000);
    if(ps1<=0){
    alert("Perdiste")
    navigation.navigate("PokeBatallaScreen")
}
}

const checkPS= ()=>{
    console.log("Entré a checar")
    if(ps2<=0){
        battle.MiPokemon = miPokemon.nombre;
        battle.Contrincante = pokemonContrario.nombre;
        battle.Observacion = "GANADOR"
        battle.Puntaje = Math.round((ps1-ps2)*100);
        battle.Fecha = fecha.getDate() + "/"+ fecha.getMonth() + "/" + fecha.getFullYear();
        saveFunction("ganado")
    //    navigation.navigate("PokeBatallaScreen") 
    }
    if(ps1<=0){
        battle.MiPokemon = miPokemon.nombre;
        battle.Contrincante = pokemonContrario.nombre;
        battle.Observacion = "PERDEDOR"
        battle.Puntaje = Math.round((ps1-ps2)*100);
        battle.Fecha = fecha.getDate() + "/"+ fecha.getMonth() + "/" + fecha.getFullYear();
        saveFunction("perdido")
     //   navigation.navigate("PokeBatallaScreen")
    }
}

const saveFunction =(param) =>{
    // Works on both Android and iOS
      Alert.alert(
        'Fin de la batalla, has '+param,
        '¿Quisieras guardar esta batalla?',
        [
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          { text: 'Si', onPress: () => (insertBattle())  }
        ],
        { cancelable: true }
      );
  }

checkPS()
    return(
        <Container>
            <SuperiorRow>
                <GrayRow>
                <Pokeball 
                    source={require('../img/pokeball.png')}
                    />
                    <UserText>¡A luchar!</UserText>
                </GrayRow>
                <Triangle/>
                <RedRow>
                    <ButtonGroup>
                        <ButtonTop onPress={()=>navigation.navigate("PokeBatallaScreen")}>
                        <MaterialCommunityIcons
                            name="arrow-left-bold"
                            size={18}
                            color="black"
                            />
                        </ButtonTop>
                    </ButtonGroup>
                </RedRow>
            </SuperiorRow>
            <FighterRow>
            <FightBox>
                <Fighter1>
               <PokeNames>{miPokemon.nombre}</PokeNames>
               </Fighter1>
               <Triangle1/>
                </FightBox>
                <Fighter1>
                    <PokeNames>vs</PokeNames>
                </Fighter1>
                <FightBox>
                <Triangle2/>
                <Fighter1>
               <PokeNames>{pokemonContrario.nombre}</PokeNames>
               </Fighter1>
                </FightBox>
            </FighterRow>
            <CenterBox>
    <FighterDiv><ViewCenter><ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" indeterminate={false} progress={ps1}/><UserText>{Math.round((ps1*100)).toFixed(2)}% ps</UserText></ViewCenter>{imagen1}</FighterDiv>
                <Statistics>
                    <StatsText>{poke} utilizó:</StatsText>
                    <StatsDesc>{move}</StatsDesc>
                    <StatsText></StatsText>
                    <StatsDesc>Daño: {danio}</StatsDesc>
                </Statistics>
                <FighterDiv><ViewCenter><ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" indeterminate={false} progress={ps2}/><UserText>{Math.round((ps2*100)).toFixed(2)}% ps</UserText></ViewCenter>{imagen2}</FighterDiv>
                <FighterDiv>{imagen2}</FighterDiv>
            </CenterBox>
            <DownBar>
                <FighterDiv>
                   <ButtonRow>
                        <ButtonMov onPress={()=>toDamage(1)}><MoveText>{ataque1.Ataque1}</MoveText></ButtonMov>
                        <ButtonMov onPress={()=>toDamage(2)}><MoveText>{ataque1.Ataque2}</MoveText></ButtonMov>
                   </ButtonRow>
                   <ButtonRow>
                        <ButtonMov onPress={()=>toDamage(3)}><MoveText>{ataque1.Ataque3}</MoveText></ButtonMov>
                        <ButtonMov onPress={()=>toDamage(4)}><MoveText>{ataque1.Ataque4}</MoveText></ButtonMov>
                   </ButtonRow>
                </FighterDiv>
                <FighterDiv>
                <ButtonRow>
                        <ButtonMov><MoveText>{ataque2.Ataque1}</MoveText></ButtonMov>
                        <ButtonMov><MoveText>{ataque2.Ataque2}</MoveText></ButtonMov>
                   </ButtonRow>
                   <ButtonRow>
                        <ButtonMov><MoveText>{ataque2.Ataque3}</MoveText></ButtonMov>
                        <ButtonMov><MoveText>{ataque2.Ataque4}</MoveText></ButtonMov>
                   </ButtonRow>
                </FighterDiv>
            </DownBar>
        </Container>
    )
}

export default PokePersonaje;