import React from 'react'

import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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

const ButtonMov = styled.TouchableOpacity`
    background: #c4c4c4;
    width: 40%;
    height: 80%;
    margin: 0 14px;
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

const PokePersonaje = ({navigation})=>{
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
               <PokeNames>Pikachu</PokeNames>
               </Fighter1>
               <Triangle1/>
                </FightBox>
                <Fighter1>
                    <PokeNames>vs</PokeNames>
                </Fighter1>
                <FightBox>
                <Triangle2/>
                <Fighter1>
               <PokeNames>Squirtle</PokeNames>
               </Fighter1>
                </FightBox>
            </FighterRow>
            <CenterBox>
                <FighterDiv><UserText>H</UserText></FighterDiv>
                <Statistics>
                    <StatsText>Pikachu utilizó:</StatsText>
                    <StatsDesc>Cola de hierro</StatsDesc>
                    <StatsText></StatsText>
                    <StatsDesc>Daño: 35</StatsDesc>
                </Statistics>
                <FighterDiv><UserText>H</UserText></FighterDiv>
            </CenterBox>
            <DownBar>
                <FighterDiv>
                   <ButtonRow>
                       <ButtonMov></ButtonMov>
                       <ButtonMov></ButtonMov>
                   </ButtonRow>
                   <ButtonRow>
                       <ButtonMov></ButtonMov>
                       <ButtonMov></ButtonMov>
                   </ButtonRow>
                </FighterDiv>
                
                <FighterDiv>
                <ButtonRow>
                       <ButtonMov></ButtonMov>
                       <ButtonMov></ButtonMov>
                   </ButtonRow>
                   <ButtonRow>
                       <ButtonMov></ButtonMov>
                       <ButtonMov></ButtonMov>
                   </ButtonRow>
                </FighterDiv>
            </DownBar>
        </Container>
    )
}

export default PokePersonaje;