import React, { useState } from 'react'

import styled from 'styled-components/native'

import { Audio } from 'expo-av'
import { FontAwesome } from '@expo/vector-icons'
import { Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

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

const PokeCircle = styled.View`
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

const Type = styled.View`
    height: 20px;
    width: 70px;
    border-radius: 10px;
    background: yellow;
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
   
    const [play, setPlay] = useState(true);
    let value = play;
    
    const playBackground= async()=>{
        console.log(play);
        console.log("Estoy en el audio")
        try{
              await soundObject.unloadAsync()
              await soundObject.loadAsync(require('../audios/background.mp3'));
              soundObject.setIsLoopingAsync(true);
              await soundObject.replayAsync();
              console.log(soundObject);
        }catch(error){
            console.log("Ha ocurrido un error al tratar de cargar el archivo. "+error);
        }
    }

    if(value){
        playBackground();
        
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
       console.log("Mi valor después es "+value)
       
    }

    return(
        <Container>
           <SuperiorRow>
                <GrayRow>
                    <Pokeball 
                    source={require('../img/pokeball.png')}
                    />
                    <UserText>¡Bienvenido(a), Christopher!</UserText>
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
                            <PokeCircle>
                                <PokeImage
                                source={require('../img/Pikachu.png')}
                                />
                            </PokeCircle>
                            <PokeName>Pikachu</PokeName>
                        </Group>
                        <Group>
                            <PokeCircle>
                            <PokeImage
                                source={require('../img/Bulbasaur.png')}
                                />
                            </PokeCircle>
                            <PokeName>Bulbasaur</PokeName>
                        </Group>
                        <Group>
                            <PokeCircle>
                            <PokeImage
                                source={require('../img/Butterfree.png')}
                                />
                            </PokeCircle>
                            <PokeName>Butterfree</PokeName>
                        </Group>
                    </PokeRow>
                    <PokeRow>
                    <Group>
                            <PokeCircle>
                            <PokeImage
                                source={require('../img/Squirtle.png')}
                                />
                            </PokeCircle>
                            <PokeName>Squirtle</PokeName>
                        </Group>
                    <Group>
                            <PokeCircle>
                            <PokeImage
                                source={require('../img/Riolu.png')}
                                />
                            </PokeCircle>
                            <PokeName>Riolu</PokeName>
                        </Group>
                        <Group>
                            <PokeCircle>
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
                <Name>Pikachu</Name>
                <ButtonTop onPress={()=>navigation.navigate("PokePersonajeScreen")}>
                <Icon
                    source={require('../img/fencing2.png')}/>
                </ButtonTop>
                </Title>

            <Card>
            <Type><Info>Eléctrico</Info></Type>
            </Card>
            <CardDivider>
                <InfoDivider>
                <Description>
                    Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven sus mejillas.
                </Description>
                <StatsBox>
                    <SBox>
                        <StatText>PS</StatText>
                    </SBox>
                    <SValue>
                        <Info>125</Info>
                    </SValue>
                </StatsBox>
                <StatsBox>
                    <SBox>
                        <StatText>Ataque</StatText>
                    </SBox>
                    <SValue>
                        <Info>125</Info>
                    </SValue>
                </StatsBox>
                <StatsBox>
                    <SBox>
                        <StatText>Defensa</StatText>
                    </SBox>
                    <SValue>
                        <Info>125</Info>
                    </SValue>
                </StatsBox>
                <StatsBox>
                    <SBox>
                        <StatText>Velocidad</StatText>
                    </SBox>
                    <SValue>
                        <Info>125</Info>
                    </SValue>
                </StatsBox>
                </InfoDivider>
                <ImageDivider>
                <ImageBox>
                <ImageCard
                    source={require('../img/Pikachu.png')}
                    />
                </ImageBox>
                <AbilityBox>
                    <ABox>
                        <StatText>Habilidad</StatText>
                    </ABox>
                    <ABox>
                        <Info>Estática</Info>
                    </ABox>
                </AbilityBox>
                <AbilityBox>
                <ABox>
                        <StatText>Peso y Altura</StatText>
                    </ABox>
                    <ABox>
                        <Info>0.4 m  60kg</Info>
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