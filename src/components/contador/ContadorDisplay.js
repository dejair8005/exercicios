import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <View style={styles.display}>
            <Text style={[Estilo.txtG, styles.displayText]}>
                {props.num} 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: { 
        backgroundColor: '#000',
        padding: 20,
        width: 300,  
    },
    displayText: {
        color: '#FFF'
    }
})
 
