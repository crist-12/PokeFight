import React, {useState,useContext} from 'react'

import styled from 'styled-components/native'

import { TextInput, Text, ScrollView, Button } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
//import {PokemonsContext} from '../../context/pokemonsContext'

import {UsersContext} from '../context/UsersContext'


const Container = styled.SafeAreaView`
    flex: 1;
    background: white;
`

const GrayRow = styled.View`
    background: #c4c4c4;
    height: 15%;
    justify-content: center;
    align-items: center;
`
const UserText = styled.Text`
    font-size: 16px;
`

const FormDiv = styled.View`
    height: 85%;

    justify-content: center;
    align-items: center;
`

const RegisterDiv = styled.View`
    height: 70%;
    width: 60%;
    background: #C1E6F6;
`

const SuperiorRow = styled.View`
    background: rgb(250, 95, 95);
    height: 20%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
const Circle = styled.View`
    background: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin: 0 10px;
`
const Data = styled.View`
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`

const DataName = styled.View`
    margin-top: 30px;
    flex-direction: row;
`

const Name = styled.TextInput`
    margin-left: 5px;
    width: 50%;
    background: white;
    font-size: 14px;
`

const BDiv = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const ButtonSave = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background: #c4c4c4;
    justify-content: center;
    align-items: center;
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

const PokeUsers = ({navigation})=>{
   /*const [users,setusers] = useState ("")

    const pokemonsContext = useContext (PokemonsContext);
    const {addNewUsers} =pokemonsContext

    const handlerNewUsers = async(users) =>{
       await addNewUsers (users);  

    }*/
   
    const [ name, setName ] = useState(null);
   
    const usersContext = useContext(UsersContext);
    const {users, addNewUser}= usersContext;

    const insertUser = () => {
        try{
        addNewUser(name)
        console.log("He guardado el usuario "+name);
        setName('')
        }
        catch(e){
            console.log(e);
        } 
    }


    return(
        <Container>
            <GrayRow>
                <UserText>Registro de Usuario</UserText>
            </GrayRow>
            <ButtonTop onPress={()=>navigation.navigate("PokeBatallaScreen")}>
            <MaterialCommunityIcons 
                name="arrow-left-bold"
                size={18}
                color="white"
                />
            </ButtonTop>
                <FormDiv>
                    <RegisterDiv>
                        <SuperiorRow>
                            <Circle/>
                            <UserText>Credencial de Entrenador Pokémon</UserText>
                            <Circle/>
                            </SuperiorRow>
                            <Data>
                                <UserText>Registro Nacional de Entrenadores Pokémon</UserText>
                            </Data>
                            <DataName>
                            <UserText>Mi nombre es: </UserText>
                            <Name onChangeText={setName} value={name} placeholder="Buscar"></Name>  
                            </DataName>
                            
                                <BDiv><ButtonSave onPress={insertUser}><UserText>Acepto</UserText></ButtonSave></BDiv>
                                

                    </RegisterDiv>

                </FormDiv>
        </Container>
    )
}

export default PokeUsers;