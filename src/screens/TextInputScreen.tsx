import React, { useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback, Text } from 'react-native'
import CustomSwitch from '../components/CustomSwitch'
import HeaderTitle from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

const TextInputScreen = () => {

    const { form, onChangeInput, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >
                    <>
                        <View style={styles.globalMargin}>
                            <HeaderTitle title="TextInputs" />
                            <TextInput
                                style={stylesScreen.inputStyle}
                                placeholder="ingrese su nombre"
                                autoCorrect={false}
                                autoCapitalize="words"
                                onChangeText={value => onChangeInput(value, 'name')}
                            />
                            <TextInput
                                style={stylesScreen.inputStyle}
                                placeholder="ingrese su email"
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={value => onChangeInput(value, 'email')}
                                keyboardType="email-address"
                                keyboardAppearance="dark" //solo iOS
                            />

                            <View style={stylesScreen.switchRow}>
                                <Text style={stylesScreen.switchText}>isActive</Text>
                                <CustomSwitch isOn={isSubscribed} onChange={(value) => onChangeInput(value, 'isSubscribed')} />
                            </View>

                            <TextInput
                                style={stylesScreen.inputStyle}
                                placeholder="ingrese su telefono"
                                onChangeText={value => onChangeInput(value, 'phone')}
                                keyboardType="phone-pad"
                            />
                            <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        </View>
                        <View style={{ height: 100 }} />
                    </>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    }
})

export default TextInputScreen
