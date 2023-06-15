import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'


export default ({ min, max }) => {
    //const { min, max } = props
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    return (
    <Text style={Estilo.txtG}>
        O Valor Aleatorio é {aleatorio}
    </Text>
    )
}

