import React from 'react'

import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    background: white;
`
const SuperiorRow = styled.View`
    width: 100%;
    flex-direction: row;
    background: rgb(250, 95, 95);
    justify-content: space-between;
`

const GrayRow = styled.View`
    background: #c4c4c4;
    height: 40px;
    justify-content: flex-start;
    flex-direction: row;
    width: 50%
    margin-right: 6px;
`
const RedRow = styled.View`
    background: rgb(250, 95, 95);
    width: 50%
    margin-bottom: 5px;
    
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
    background: blue;
    margin-right: 90%;
    align-items: flex-end;
`

const ButtonTop = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: white;
    margin-top: 5px;
    align-items: flex-end;
    margin-right: 15px;
`


const PokeBatalla = ()=>{
    return(
        <Container>
            <SuperiorRow>
            <GrayRow>
                <Pokeball
                source={require('../img/pokeball.png')}
                />
                <UserText>¡Bienvenido(a), Christopher!</UserText>
                <Triangle/>
            </GrayRow>
            <RedRow>
                <ButtonTop>
                    
                </ButtonTop>
                <ButtonTop>
                    
                </ButtonTop>
            </RedRow>
            
            </SuperiorRow>
            
        </Container>
    )
}

export default PokeBatalla;
//Usar Font-Awesome para icono de trofeo
