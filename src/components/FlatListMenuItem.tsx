import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons//Ionicons';
import { useNavigation } from '@react-navigation/core';

interface Props{
    menuItem: MenuItem
}

const FlatListMenuItem = ({menuItem}:Props) => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={ () => navigation.navigate(menuItem.component) }
        >
            <View style={styles.container}>
                <Icon 
                    name={menuItem.icon}
                    color="gray"
                    size={30}
                />
                <Text style={styles.itemText}>
                    {menuItem.name}
                </Text>

                <View style={{flex:1}} />

                <Icon 
                    name='caret-forward-outline'
                    color="gray"
                    size={30}
                />
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    itemText:{
        marginLeft:10,
        fontSize:20
    }
});

export default FlatListMenuItem
