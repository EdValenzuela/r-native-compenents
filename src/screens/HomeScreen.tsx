import React from 'react'
import { View, FlatList } from 'react-native';
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItem';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';



const HomeScreen = () => {

    return (
        <View style={{ flex:1, ...styles.globalMargin }}>
            <FlatList 
                data={menuItems}
                renderItem={ ({item}) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ <HeaderTitle title="Opciones de menú" /> }
                ItemSeparatorComponent={ () => <ItemSeparator /> }
                ListFooterComponent={ () => (
                    <View style={{marginBottom: 70}} />
                )}
            />
        </View>
    )
}

export default HomeScreen
