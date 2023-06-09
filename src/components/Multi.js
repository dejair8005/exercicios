import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'




export default function Comp() {
    return <Text style={Estilo.txtG}> Comp #Oficial</Text>    
}

export function Comp1() {
    return <Text style={Estilo.txtG}> Comp #01</Text>    
}

export function Comp2() {
    return <Text style={Estilo.txtG}> Comp #02</Text>    
}


/* Outra forma de fazer a exportação
basta apenas tirar o export acima
e descomentar as linhas abaixo */
// export {Comp1, Comp2}
// export default Comp