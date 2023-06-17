import React from 'react'
import { Button } from 'react-native'

export default props => {

    function executar() {
        console.warn('Exec #01!!!')
    }

    return (
        <>
            <Button 
                title="Executar #01!"
                onPres={executar}
            />
            <Button 
                title="Executar #02!"
                onPres={function() {
                    console.warn('Exec #02!!!')
                }}
            />
            <Button 
                title="Executar #03!"
                onPres={() => console.warn('Exec #03!!!')}
            />
        </>
    )
}