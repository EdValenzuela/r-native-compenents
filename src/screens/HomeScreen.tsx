import React from 'react'
import { View, FlatList, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItem';



const HomeScreen = () => {
    
    const {top} = useSafeAreaInsets();

    const renderListHeader = () => {
        return(
            <View style={{marginTop: top + 20, marginBottom:20}}>
                <Text style={styles.title}>Opciones de Menú</Text>
            </View>
        )
    }

    const itemSeparator = () =>{
        return(
            <View 
                style={{
                    borderBottomWidth: 2,
                    opacity: 0.4,
                    marginVertical:8
                }}
            />
        )
    }

    return (
        <View style={{ flex:1, ...styles.globalMargin }}>

            
            <FlatList 
                data={menuItems}
                renderItem={ ({item}) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ renderListHeader }
                ItemSeparatorComponent={ itemSeparator }
            />

        </View>
    )
}

export default HomeScreen
