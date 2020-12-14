import React, {useContext, useEffect, useState} from 'react'

import styled from 'styled-components/native'

import {Alert} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import {BatallasContext} from '../context/BatallasContext'
import {UsersContext} from '../context/UsersContext'


// ----- STYLED SECTION -----
const Container = styled.SafeAreaView`
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
    background: #c4c4c4;
    height: 10%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const UserText = styled.Text`
    font-size: 14px;
`
const TitleText = styled.Text`
    font-weight: bold;
    font-size: 14px;
`
const TopGrid = styled.View`
    width: 100%;
    height: 90%;
    justify-content: center;
    align-items: center;

    flex-direction: row;
`

const ViewAux = styled.View`
    background: yellow;
    height: 100%;
    width: 15%;
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
    background: black;
    margin-top: 5px;
    margin-left: 10px;
    align-items: center;
    margin-right: 15px;
    justify-content: center;
`

const UpdateButton = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    border-radius: 15px;

    margin-top: 5px;
    margin-left: 10px;
    align-items: center;
    margin-right: 15px;
    justify-content: center;
`
const DeleteButton = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: red;
    margin-top: 5px;
    margin-left: 10px;
    align-items: center;
    margin-right: 15px;
    justify-content: center;
`
const Table = styled.View`
    width: 100%;
    height: 70%;
    border: solid;
    border-width: 3px;
`

const SideView = styled.View`
    width: 15%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const CenterView = styled.View`
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100%;
`

const Spider = styled.Image`
    height: 80px;
`


const RowT = styled.View`
    flex-direction: row;
    height: 16.66%;
`

const Row = styled.View`
    width: 20%;
    border: solid;
    padding: 2px;
`

const ViewButton = styled.View`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const BackRow = styled.View`
    width: 15%;

`

const RightRow = styled.View`
    width: 15%;
    align-items: flex-end;

    flex-direction: row;
`

const PokeTop = ({navigation})=>{


    //Traer información del contexto
    let batallasContext = useContext(BatallasContext);
    let {batallas, deleteBatallas, setBatallas}= batallasContext;

    //Hook para refrescar página
    const[dummy, setDummy]=useState(0);

    //Función para borrar todos los datos de la tabla
    const borrar=()=>{
        Alert.alert(
            'Eliminar datos de batalla',
            'Esta acción es irreversible, ¿deseas continuar?',
            [
              {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'Si', onPress: () => (deleteBatallas(), setBatallas(null))  }
            ],
            { cancelable: true }
          );
    }


    return(
        <Container>
            <GrayRow>
                <TitleText>Top Mejores Batallas</TitleText>
            </GrayRow>
            <ViewButton>
                <BackRow>
            <ButtonTop onPress={()=>navigation.navigate("PokeBatallaScreen")}>
            <MaterialCommunityIcons 
                name="arrow-left-bold"
                size={18}
                color="white"
                />
            </ButtonTop>
            </BackRow>
            <RightRow>
            <UpdateButton onPress={()=>setDummy(1)}>
            <MaterialCommunityIcons 
                name="autorenew"
                size={18}
                color="white"
                />
            </UpdateButton>
                <DeleteButton onPress={()=>borrar()}>
                <MaterialCommunityIcons 
                name="delete-forever"
                size={18}
                color="white"
                />
                </DeleteButton>  
            </RightRow>
            </ViewButton>
            {batallas?
            <TopGrid>
        <SideView><Spider source={require('../img/spiderman.png')}/></SideView>
            <CenterView>
            <Table>
                <RowT>
                <Row><TitleText>Posición</TitleText></Row>
                <Row><TitleText>Tu Pokemon</TitleText></Row>
                <Row><TitleText>Atancante</TitleText></Row>
                <Row><TitleText>Puntuación</TitleText></Row>
                <Row><TitleText>Día</TitleText></Row>
                </RowT>
                <RowT>
                <Row><UserText>1</UserText></Row>
                <Row><UserText>{batallas[4]!=undefined?batallas[4].Mipokemon:"-"}</UserText></Row>
                <Row><UserText>{batallas[4]!=undefined?batallas[4].Contrincante:"-"}</UserText></Row>
                <Row><UserText>{batallas[4]!=undefined?batallas[4].Puntaje:"-"}</UserText></Row>
                <Row><UserText>{batallas[4]!=undefined?batallas[4].Fecha:"-"}</UserText></Row>
                </RowT>
                <RowT>
                <Row><UserText>2</UserText></Row>
                <Row><UserText>{batallas[3]!=undefined?batallas[3].Mipokemon:"-"}</UserText></Row>
                <Row><UserText>{batallas[3]!=undefined?batallas[3].Contrincante:"-"}</UserText></Row>
                <Row><UserText>{batallas[3]!=undefined?batallas[3].Puntaje:"-"}</UserText></Row>
                <Row><UserText>{batallas[3]!=undefined?batallas[3].Fecha:"-"}</UserText></Row>
                </RowT>
                <RowT>
                <Row><UserText>3</UserText></Row>
                <Row><UserText>{batallas[2]!=undefined?batallas[2].Mipokemon:"-"}</UserText></Row>
                <Row><UserText>{batallas[2]!=undefined?batallas[2].Contrincante:"-"}</UserText></Row>
                <Row><UserText>{batallas[2]!=undefined?batallas[2].Puntaje:"-"}</UserText></Row>
                <Row><UserText>{batallas[2]!=undefined?batallas[2].Fecha:"-"}</UserText></Row>
                </RowT>
                <RowT>
                <Row><UserText>4</UserText></Row>
                <Row><UserText>{batallas[1]!=undefined?batallas[1].Mipokemon:"-"}</UserText></Row>
                <Row><UserText>{batallas[1]!=undefined?batallas[1].Contrincante:"-"}</UserText></Row>
                <Row><UserText>{batallas[1]!=undefined?batallas[1].Puntaje:"-"}</UserText></Row>
                <Row><UserText>{batallas[1]!=undefined?batallas[1].Fecha:"-"}</UserText></Row>
                </RowT>
                <RowT>
                <Row><UserText>5</UserText></Row>
                <Row><UserText>{batallas[0]!=undefined?batallas[0].Mipokemon:"-"}</UserText></Row>
                <Row><UserText>{batallas[0]!=undefined?batallas[0].Contrincante:"-"}</UserText></Row>
                <Row><UserText>{batallas[0]!=undefined?batallas[0].Puntaje:"-"}</UserText></Row>
                <Row><UserText>{batallas[0]!=undefined?batallas[0].Fecha:"-"}</UserText></Row>
                </RowT>
            </Table>
            </CenterView>
            <SideView><Spider source={require('../img/spiderman.png')}/></SideView>
            </TopGrid>
            :<UserText>No hay batallas registradas</UserText>}
        </Container>
    )
}

export default PokeTop;