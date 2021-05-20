import React from 'react'
import { Alert, Button, View } from 'react-native'
import prompt from 'react-native-prompt-android'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const AlertScreen = () => {

    const showAlert = () =>{
        Alert.alert(
            'titulo',
            'subtitulo',
            [
                {
                    text:'Cancel',
                    onPress:() => console.log('cancel pressed'),
                    style: 'cancel'
                },
                {
                    text:'Ok',
                    onPress:() => console.log('ok pressed')
                }
            ],
            {
                cancelable:true,
                onDismiss: () => console.log('onDismiss')
            }
        )
    }

    const showPrompt = () => {
        // Alert.prompt(
        //     '¿Esta seguro?',
        //     'Esta acción no se puede revertir',
        //     ( valor: string ) => console.log("info ", valor),
        //     'plain-text',
        //     'hola mundo',
        //     'number-pad'
        // )
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button 
                title="Mostrar Alerta"
                onPress={showAlert}
            />
            <View style={{height:10, marginBottom:10}} />
            {/* Solo disponible para iOS */}
            <Button 
                title="Mostrar prompt"
                onPress={showPrompt}
            />
        </View>
    )
}

export default AlertScreen
