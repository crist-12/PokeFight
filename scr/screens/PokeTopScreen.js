import React, {useContext} from 'react'

import styled from 'styled-components/native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import {BatallasContext} from '../context/BatallasContext'

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

const Table = styled.View`
    width: 60%;
    height: 70%;
    border: solid;
    border-width: 3px;
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

const PokeTop = ({navigation})=>{

    const batallasContext = useContext(BatallasContext);
    const {batallas, addNewBatalla}= batallasContext;

    return(
        <Container>

            <GrayRow>
                <TitleText>Top Mejores Batallas</TitleText>
            </GrayRow>

            <ButtonTop onPress={()=>navigation.navigate("PokeBatallaScreen")}>
            <MaterialCommunityIcons 
                name="arrow-left-bold"
                size={18}
                color="white"
                />
            </ButtonTop>

            <TopGrid>
            <Table>
                <RowT>
                <Row><TitleText>Posición</TitleText></Row>
                <Row><TitleText>Usuario</TitleText></Row>
                <Row><TitleText>Atancante</TitleText></Row>
                <Row><TitleText>Puntuación</TitleText></Row>
                <Row><TitleText>Día</TitleText></Row>
                </RowT>
                <RowT>
                <Row><UserText>1</UserText></Row>
                <Row><UserText>crist12</UserText></Row>
                <Row><UserText>user123</UserText></Row>
                <Row><UserText>100</UserText></Row>
                <Row><UserText>11-11-2020</UserText></Row>
                </RowT>
                <RowT>
                <Row><UserText>2</UserText></Row>
                <Row><UserText>crist12</UserText></Row>
                <Row><UserText>user123</UserText></Row>
                <Row><UserText>90</UserText></Row>
                <Row><UserText>11-11-2020</UserText></Row>
                </RowT>
                <RowT>
                <Row><UserText>3</UserText></Row>
                <Row><UserText>crist12</UserText></Row>
                <Row><UserText>user123</UserText></Row>
                <Row><UserText>80</UserText></Row>
                <Row><UserText>11-11-2020</UserText></Row>
                </RowT>
                <RowT>
                <Row><UserText>4</UserText></Row>
                <Row><UserText>crist12</UserText></Row>
                <Row><UserText>user123</UserText></Row>
                <Row><UserText>70</UserText></Row>
                <Row><UserText>11-11-2020</UserText></Row>
                </RowT>
                <RowT>
                <Row><UserText>5</UserText></Row>
                <Row><UserText>crist12</UserText></Row>
                <Row><UserText>user123</UserText></Row>
                <Row><UserText>60</UserText></Row>
                <Row><UserText>11-11-2020</UserText></Row>
                </RowT>
            </Table>
            </TopGrid>
        </Container>
    )
}

export default PokeTop;