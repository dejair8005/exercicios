import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
        return (
          <View style={style.FlexV3}>
            <Quadrado cor='#ff801a' lado={20}/>
            <Quadrado cor='#dd22c1' lado={30}/>
            <Quadrado cor='#8312ed' lado={40}/>
            <Quadrado cor='#36c9a7' lado={50}/>
          </View>
        )
}

const style = StyleSheet.create({
    FlexV3: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "stretch",
      height: 350,
      width: '100%',        
      backgroundColor: '#000'

    }
})
