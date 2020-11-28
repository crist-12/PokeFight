import React from 'react'

import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    background: white;
`

const GrayRow = styled.View`
    background: #c4c4c4;
`
const UserText = styled.Text`
    font-size: 16px;
`

const PokePersonaje = ({navigation})=>{
    return(
        <Container>
            <GrayRow>
                <UserText>¡Bienvenido, Christopher!</UserText>
            </GrayRow>
        </Container>
    )
}

export default PokePersonaje;