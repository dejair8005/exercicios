import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
        return (
          <View style={style.FlexV2}>
            <Quadrado cor='#ff801a'/>
            <Quadrado cor='#dd22c1'/>
            <Quadrado cor='#0F0'/>
            <Quadrado cor='#009'/>
          </View>
        )
}

const style = StyleSheet.create({
    FlexV2: {
      flex: 1,
        width: '100%',
        justifyContent: "space-evenly",
        alignItems: "flex-end",         
        backgroundColor: '#000'

    }
})
